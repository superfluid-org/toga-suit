import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Contract, utils } from 'ethers';
import {
	NetworkContext,
	ProviderContext,
	SelectedTokenContext,
	SignerContext,
} from '../context';
import Button from '../Button';
import { InfoBoxContainer, InfoBoxesContainer } from '../InfoBox/commonElements';
import InfoBox from '../InfoBox';
import {
	naturalUnitToDailyReadable,
	naturalUnitToReadable,
} from '../../helper/tokenUtils';
import { isWalletConnected } from '../../helper/web3Utils';
import TOGAContractABI from '../../contract-abi/TOGA.json';
import {
	buildLegacyPanelActions,
	getNetworkChainId,
	resolveLegacyTogaAddress,
	shouldShowLegacyPanel,
} from '../../toga';
import {
	FAILED,
	NO_TRANSACTION,
	SUCCESSFUL,
	WAITING,
} from '../../constants/txStatus';
import PageLoader from '../Loader';
import BigInfo from '../common/BigInfo';

const LEGACY_TOGA_ABI = [
	...TOGAContractABI,
	'function custodian() view returns (address)',
	'function withdrawFundsInCustody(address token)',
];

const CUSTODIAN_ABI = [
	'function balances(address token, address recipient) view returns (uint256)',
];

const LegacyBoxes = styled(InfoBoxesContainer)`
	@media screen and (min-width: 768px) {
		${InfoBoxContainer} {
			flex: 0 0 calc((100% - 100px) / 3);
			width: auto;
		}
	}
`;

const PanelContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 48px;
	padding-top: 40px;
	border-top: 1px solid ${(props) => props.theme.colors.border};
	row-gap: 20px;
`;

const PanelTitle = styled.div`
	font-size: ${(props) => props.theme.fontSizes.mediumLarge};
`;

const ActionsRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;

const HelperText = styled.p`
	margin: 0;
	max-width: 68ch;
	opacity: 0.85;
	line-height: 1.45;
`;

function bondDurationLabel(duration) {
	if (duration == null) {
		return 'the minimum bond duration';
	}
	const seconds = Number(duration.toString());
	if (!Number.isFinite(seconds) || seconds <= 0) {
		return 'the minimum bond duration';
	}
	const days = seconds / 86400;
	if (Number.isInteger(days)) {
		return days === 1 ? '1 day' : `${days} days`;
	}
	return `${seconds} seconds`;
}

function LegacyPICPanel() {
	const { selectedNetwork } = useContext(NetworkContext);
	const selectedToken = useContext(SelectedTokenContext);
	const { ethersProvider } = useContext(ProviderContext);
	const { signer } = useContext(SignerContext);

	const [account, setAccount] = useState(null);
	const [loading, setLoading] = useState(false);
	const [legacyState, setLegacyState] = useState(null);
	const [txStatus, setTxStatus] = useState(NO_TRANSACTION);
	const [legacyContract, setLegacyContract] = useState(null);
	const [refreshKey, setRefreshKey] = useState(0);

	useEffect(() => {
		const legacyAddress = resolveLegacyTogaAddress(selectedNetwork);
		if (
			!legacyAddress ||
			!ethersProvider ||
			!signer ||
			!isWalletConnected(ethersProvider)
		) {
			setAccount(null);
			setLegacyContract(null);
			return;
		}
		let cancelled = false;
		setLegacyContract(
			new Contract(legacyAddress, new utils.Interface(LEGACY_TOGA_ABI), signer),
		);
		signer
			.getAddress()
			.then((address) => {
				if (!cancelled) {
					setAccount(address);
				}
			})
			.catch(() => {
				if (!cancelled) {
					setAccount(null);
				}
			});
		return () => {
			cancelled = true;
		};
	}, [selectedNetwork, ethersProvider, signer]);

	useEffect(() => {
		if (!legacyContract || !selectedToken || !account) {
			setLegacyState(null);
			return;
		}
		let cancelled = false;
		const load = async () => {
			setLoading(true);
			try {
				const { pic, bond, exitRate } =
					await legacyContract.getCurrentPICInfo(
						selectedToken.id,
					);
				let custody = 0;
				try {
					const custodianAddr = await legacyContract.custodian();
					const custodian = new Contract(
						custodianAddr,
						CUSTODIAN_ABI,
						legacyContract.provider,
					);
					custody = await custodian.balances(
						selectedToken.id,
						account,
					);
				} catch (error) {
					console.error('Unable to read custodied balance', error);
					custody = 0;
				}
				let maxExitRate = null;
				if (bond?.gt?.(0)) {
					maxExitRate = await legacyContract.getMaxExitRateFor(
						selectedToken.id,
						bond,
					);
				}
				let minBondDuration = null;
				try {
					minBondDuration = await legacyContract.minBondDuration();
				} catch (error) {
					console.error('Unable to read minBondDuration', error);
				}
				if (!cancelled) {
					setLegacyState({
						pic,
						bond,
						exitRate,
						custody,
						maxExitRate,
						minBondDuration,
						isPic:
							pic &&
							account &&
							pic.toLowerCase() === account.toLowerCase(),
					});
				}
			} catch (error) {
				console.error('Unable to read the previous TOGA', error);
				if (!cancelled) {
					setLegacyState(null);
				}
			}
			if (!cancelled) {
				setLoading(false);
			}
		};
		load();
		return () => {
			cancelled = true;
		};
	}, [legacyContract, selectedToken, account, refreshKey]);

	if (
		!legacyContract ||
		!legacyState ||
		!shouldShowLegacyPanel({
			chainId: getNetworkChainId(selectedNetwork),
			account,
			pic: legacyState.pic,
			bond: legacyState.bond,
			custody: legacyState.custody,
		})
	) {
		return null;
	}

	const actions = buildLegacyPanelActions({
		toga: legacyContract.address,
		token: selectedToken.id,
		bond: legacyState.bond,
		exitRate: legacyState.exitRate,
		maxExitRate: legacyState.maxExitRate,
		custody: legacyState.custody,
		isPic: legacyState.isPic,
	});

	async function runLegacyTx(action) {
		try {
			setTxStatus(WAITING);
			const tx = await signer.sendTransaction({
				to: action.to,
				data: action.data,
			});
			const receipt = await tx.wait();
			if (receipt.status) {
				setTxStatus(SUCCESSFUL);
				setRefreshKey((key) => key + 1);
			} else {
				setTxStatus(FAILED);
			}
		} catch (error) {
			console.error('Legacy TOGA action failed', error);
			setTxStatus(FAILED);
		}
		setTimeout(() => setTxStatus(NO_TRANSACTION), 3000);
	}

	return (
		<PanelContainer>
			<PanelTitle>Previous TOGA (legacy bond)</PanelTitle>
			{legacyState.isPic && legacyState.bond?.gt?.(0) ? (
				<HelperText>
					You are still PIC on the previous contract. Liquidation
					rewards no longer accrue there. Stream this stake back to
					your wallet, then use Become PIC above. Do not bid while
					the stake is still locked here.
				</HelperText>
			) : null}
			{legacyState.custody?.gt?.(0) ? (
				<HelperText>
					{naturalUnitToReadable(legacyState.custody, selectedToken)}{' '}
					is held by the custodian because the return transfer failed.
					The wallet that withdraws it must be able to receive the
					token. Withdraw it, then stake on the current TOGA with
					Become PIC.
				</HelperText>
			) : null}
			<LegacyBoxes>
				{legacyState.isPic && legacyState.bond?.gt?.(0) ? (
					<InfoBox
						title="Stake"
						secondaryInfo="Bond on the previous TOGA"
						data={naturalUnitToReadable(
							legacyState.bond,
							selectedToken,
						)}
						loading={loading}
					/>
				) : null}
				{legacyState.isPic && legacyState.bond?.gt?.(0) ? (
					<InfoBox
						title="Exit rate"
						secondaryInfo="Exit rate per day"
						data={naturalUnitToDailyReadable(
							legacyState.exitRate,
							selectedToken,
						)}
						loading={loading}
					/>
				) : null}
				{legacyState.custody?.gt?.(0) ? (
					<InfoBox
						title="Custodied"
						secondaryInfo="Returned to the custodian"
						data={naturalUnitToReadable(
							legacyState.custody,
							selectedToken,
						)}
						loading={loading}
					/>
				) : null}
			</LegacyBoxes>
			{txStatus === WAITING ? (
				<PageLoader />
			) : txStatus === SUCCESSFUL ? (
				<BigInfo text="Transaction successful" />
			) : txStatus === FAILED ? (
				<BigInfo text="Transaction failed" />
			) : (
				<ActionsRow>
					{actions.raiseExitRate?.kind === 'transaction' ? (
						<Button
							text="Stream the bond out at the maximum rate"
							onClick={() => runLegacyTx(actions.raiseExitRate)}
						/>
					) : null}
					{actions.raiseExitRate?.kind === 'already-max' ? (
						<HelperText>
							Already streaming out at the maximum rate. At that
							rate the stake empties in{' '}
							{bondDurationLabel(legacyState.minBondDuration)}.
						</HelperText>
					) : null}
					{actions.withdrawCustody?.kind === 'transaction' ? (
						<Button
							text="Withdraw custodied bond"
							onClick={() => runLegacyTx(actions.withdrawCustody)}
						/>
					) : null}
				</ActionsRow>
			)}
		</PanelContainer>
	);
}

export default LegacyPICPanel;
