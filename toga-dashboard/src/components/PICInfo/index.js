import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	NetworkContext,
	ProviderContext,
	SelectedTokenContext,
	SignerContext,
} from '../context';
import InfoBox from '../InfoBox';
import { InfoBoxesContainer } from '../InfoBox/commonElements';
import { utils, Contract } from 'ethers';
import TOGAContractABI from '../../contract-abi/TOGA.json';
import BigInfo from '../common/BigInfo';
import {
	abbreviateAddress,
	naturalUnitToReadable,
	naturalUnitToDailyReadable,
} from '../../helper/tokenUtils';
import PICInteract from './PICInteract';
import { isWalletConnected } from '../../helper/web3Utils';
import CopyableAddress from '../common/CopyableAddress';
import {
	bidMethodFromBytecode,
	resolveActiveTogaAddress,
} from '../../toga';

const PICInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const PICHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 50px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		row-gap: 15px;
	}
`;

const PICInfoTitle = styled.div`
	font-size: ${(props) => props.theme.fontSizes.mediumLarge};

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

function PICInfo() {
	const { selectedNetwork } = useContext(NetworkContext);
	const selectedToken = useContext(SelectedTokenContext);
	const [loadingPICData, setLoadingPICData] = useState(false);
	const [picData, setPicData] = useState({});
	const [allowPICInteraction, setAllowPICInteraction] = useState(false);
	const [togaContract, setTogaContract] = useState(null);
	const [bidMethod, setBidMethod] = useState(null);
	const { ethersProvider } = useContext(ProviderContext);
	const { signer } = useContext(SignerContext);

	useEffect(() => {
		let cancelled = false;
		async function attachToga() {
			if (!selectedNetwork?.contractsV1) {
				setTogaContract(null);
				setBidMethod(null);
				return;
			}
			const walletConnected = Boolean(
				ethersProvider && isWalletConnected(ethersProvider),
			);
			setAllowPICInteraction(walletConnected);
			const readProvider = ethersProvider || null;
			const togaAddress = await resolveActiveTogaAddress(
				selectedNetwork,
				readProvider,
			);
			if (cancelled || !togaAddress) {
				if (!cancelled) {
					setTogaContract(null);
					setBidMethod(null);
				}
				return;
			}
			let method = null;
			if (readProvider) {
				try {
					const code = await readProvider.getCode(togaAddress);
					method = bidMethodFromBytecode(code);
				} catch (error) {
					console.error('Unable to read TOGA bytecode', error);
					method = null;
				}
			}
			if (cancelled) {
				return;
			}
			const providerOrSigner =
				signer && walletConnected ? signer : readProvider;
			if (!providerOrSigner) {
				setTogaContract(null);
				setBidMethod(method);
				return;
			}
			setTogaContract(
				new Contract(
					togaAddress,
					new utils.Interface(TOGAContractABI),
					providerOrSigner,
				),
			);
			setBidMethod(method);
		}
		attachToga();
		return () => {
			cancelled = true;
		};
	}, [ethersProvider, selectedNetwork, signer]);

	useEffect(() => {
		if (!togaContract || !selectedToken) {
			setPicData({});
			return;
		}
		let cancelled = false;
		const refreshTogaInfo = async () => {
			setLoadingPICData(true);
			setPicData({});
			try {
				const { pic, exitRate, bond } =
					await togaContract.getCurrentPICInfo(selectedToken.id);
				if (!cancelled) {
					setPicData({ address: pic, exitRate, bond });
				}
			} catch (error) {
				console.error('Unable to read PIC info', error);
				if (!cancelled) {
					setPicData({});
				}
			}
			if (!cancelled) {
				setLoadingPICData(false);
			}
		};
		refreshTogaInfo();
		return () => {
			cancelled = true;
		};
	}, [togaContract, selectedToken]);

	useEffect(() => {
		if (!togaContract || !selectedToken) {
			return;
		}
		const picChange = (token, pic, bond, exitRate) => {
			if (token.toLowerCase() === selectedToken.id.toLowerCase()) {
				setPicData({ address: pic, exitRate, bond });
			}
		};
		const exitRateChange = (token, exitRate) => {
			if (token.toLowerCase() === selectedToken.id.toLowerCase()) {
				setPicData((prev) => ({ ...prev, exitRate }));
			}
		};
		togaContract.on('NewPIC', picChange);
		togaContract.on('ExitRateChanged', exitRateChange);
		return () => {
			togaContract.off('NewPIC', picChange);
			togaContract.off('ExitRateChanged', exitRateChange);
		};
	}, [togaContract, selectedToken]);

	return (
		<PICInfoContainer>
			<PICHeader>
				<PICInfoTitle>PIC Info</PICInfoTitle>
				<PICInteract
					enabled={allowPICInteraction}
					picAddress={picData.address}
					togaContract={togaContract}
					bidMethod={bidMethod}
				/>
			</PICHeader>
			{ethersProvider ? (
				<InfoBoxesContainer>
					<InfoBox
						title={'Address'}
						secondaryInfo={"Current PIC's wallet address"}
						data={
							picData.address ? (
								<CopyableAddress
									children={abbreviateAddress(
										picData.address,
									)}
									address={picData.address}
								/>
							) : (
								'No info'
							)
						}
						loading={loadingPICData}
					/>
					<InfoBox
						title={'Stake'}
						secondaryInfo={'Stake for the current PIC'}
						data={
							picData.bond
								? `${naturalUnitToReadable(
										picData.bond,
										selectedToken,
								  )}`
								: 'No info'
						}
						loading={loadingPICData}
					/>
					<InfoBox
						title={'Exit rate'}
						secondaryInfo={'Exit rate per day for the current PIC'}
						data={
							picData.exitRate
								? `${naturalUnitToDailyReadable(
										picData.exitRate,
										selectedToken,
								  )}`
								: 'No info'
						}
						loading={loadingPICData}
					/>
				</InfoBoxesContainer>
			) : (
				<BigInfo text={'Connect your wallet to see PIC info'} />
			)}
		</PICInfoContainer>
	);
}

export default PICInfo;
