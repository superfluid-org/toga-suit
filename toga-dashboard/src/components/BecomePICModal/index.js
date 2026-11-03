/* global BigInt */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { SelectedTokenContext } from '../context';
import LabelledInput from '../LabelledInput';
import PageLoader from '../Loader';
import { utils } from 'ethers';
import { buildBidTransactions, inputErrorText, parseStakeAndExitRate } from '../../toga';
import {
	FAILED,
	NO_TRANSACTION,
	SUCCESSFUL,
	WAITING,
} from '../../constants/txStatus';
import BigInfo from '../common/BigInfo';
import { useEthersSigner } from '../wallet/wagmiEthersAdapters';

const BecomePICModalContainer = styled.div`
	display: ${(props) => (props.enabled ? 'flex' : 'none')};
	flex-direction: column;
	position: absolute;
	right: 0;
	border: 1px solid ${(props) => props.theme.colors.border};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.info};
	padding: 30px 20px;
	row-gap: 20px;
	margin-top: 10px;

	@media screen and (max-width: 768px) {
		align-items: center;
		width: 100%;
	}
`;

const HelperText = styled.p`
	margin: 0;
	line-height: 1.4;
`;

const ControlsContainer = styled.div`
	display: flex;
	column-gap: 5px;
	justify-content: space-between;
	width: 100%;
`;

function BecomePICModal({
	enabled,
	closeModal,
	togaContract,
	bidMethod,
	disableButton,
}) {
	const selectedToken = useContext(SelectedTokenContext);

	const [exitRate, setExitRate] = useState(0);
	const [bond, setBond] = useState(0);
	const [txStatus, setTxStatus] = useState(NO_TRANSACTION);
	const [failureText, setFailureText] = useState('PIC bid failed');
	const [inputError, setInputError] = useState('');
	const signer = useEthersSigner();

	useEffect(() => {
		if (enabled) {
			setTxStatus(NO_TRANSACTION);
			setFailureText('PIC bid failed');
			setInputError('');
		}
	}, [enabled]);

	async function sendPICBid() {
		const closeAfterDelay = () => {
			disableButton(false);
			setTimeout(() => {
				setTxStatus(NO_TRANSACTION);
				closeModal();
			}, 3000);
		};
		if (!bidMethod || !signer || !togaContract) {
			setFailureText(
				bidMethod
					? 'PIC bid failed'
					: 'This TOGA contract could not be read, so a bid cannot be built.',
			);
			setTxStatus(FAILED);
			closeAfterDelay();
			return;
		}
		try {
			const { amount, exitRatePerSecond } = parseStakeAndExitRate(
				bond,
				exitRate,
				selectedToken.decimals,
			);
			setTxStatus(WAITING);
			disableButton(true);
			let allowance = 0n;
			if (bidMethod === 'approve-and-bond') {
				const erc20 = new utils.Interface([
					'function allowance(address owner, address spender) view returns (uint256)',
				]);
				const data = erc20.encodeFunctionData('allowance', [
					await signer.getAddress(),
					togaContract.address,
				]);
				const raw = await signer.provider.call({
					to: selectedToken.id,
					data,
				});
				allowance = BigInt(
					erc20.decodeFunctionResult('allowance', raw)[0].toString(),
				);
			}
			const txs = buildBidTransactions({
				method: bidMethod,
				toga: togaContract.address,
				token: selectedToken.id,
				amount,
				exitRatePerSecond,
				allowance,
			});
			for (const step of txs) {
				const tx = await signer.sendTransaction(step);
				const receipt = await tx.wait();
				if (!receipt.status) {
					setFailureText('PIC bid failed');
					setTxStatus(FAILED);
					closeAfterDelay();
					return;
				}
			}
			setTxStatus(SUCCESSFUL);
		} catch (error) {
			const message = inputErrorText(error, null);
			if (message) {
				setInputError(message);
				setTxStatus(NO_TRANSACTION);
				disableButton(false);
				return;
			}
			console.error('Unable to become PIC', error);
			setFailureText('PIC bid failed');
			setTxStatus(FAILED);
		}
		closeAfterDelay();
	}

	let content;
	if (txStatus === WAITING) {
		content = <PageLoader />;
	} else if (txStatus === NO_TRANSACTION) {
		content = (
			<React.Fragment>
				<LabelledInput
					label={`Exit Rate (${selectedToken.symbol}/day)`}
					value={exitRate}
					onChange={(e) => {
						setInputError('');
						setExitRate(e.target.value);
					}}
				/>
				<LabelledInput
					label={`Stake (${selectedToken.symbol})`}
					value={bond}
					onChange={(e) => {
						setInputError('');
						setBond(e.target.value);
					}}
				/>
				{inputError ? <HelperText>{inputError}</HelperText> : null}
				{!bidMethod ? (
					<HelperText>
						This TOGA contract could not be read, so a bid cannot
						be built.
					</HelperText>
				) : null}
				<ControlsContainer>
					<Button
						text={'Confirm'}
						onClick={sendPICBid}
						disabled={!bidMethod}
					/>
					<Button
						onClick={closeModal}
						negative={true}
						text={'Cancel'}
					/>
				</ControlsContainer>
			</React.Fragment>
		);
	} else if (txStatus === SUCCESSFUL) {
		content = <BigInfo text={'You are now the PIC!'} />;
	} else if (txStatus === FAILED) {
		content = <BigInfo text={failureText} />;
	}

	return (
		<BecomePICModalContainer enabled={enabled}>
			{content}
		</BecomePICModalContainer>
	);
}

export default BecomePICModal;
