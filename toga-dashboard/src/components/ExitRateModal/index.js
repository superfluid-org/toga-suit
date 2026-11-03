import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	FAILED,
	NO_TRANSACTION,
	SUCCESSFUL,
	WAITING,
} from '../../constants/txStatus';
import {
	exitRatePerSecondFromHumanDaily,
	inputErrorText,
} from '../../toga';
import Button from '../Button';
import BigInfo from '../common/BigInfo';
import { SelectedTokenContext } from '../context';
import LabelledInput from '../LabelledInput';
import PageLoader from '../Loader';
import { BigNumber } from 'ethers';

const ExitRateModalContainer = styled.div`
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

function ExitRateModal({ enabled, closeModal, togaContract, disableButton }) {
	const selectedToken = useContext(SelectedTokenContext);

	const [exitRate, setExitRate] = useState(0);
	const [txStatus, setTxStatus] = useState(NO_TRANSACTION);
	const [inputError, setInputError] = useState('');

	useEffect(() => {
		if (enabled) {
			setTxStatus(NO_TRANSACTION);
			setInputError('');
		}
	}, [enabled]);

	async function changeExitRate() {
		let exitRatePerSecond;
		try {
			exitRatePerSecond = exitRatePerSecondFromHumanDaily(
				exitRate,
				selectedToken.decimals,
			);
		} catch (error) {
			setInputError(inputErrorText(error, 'Exit rate change failed'));
			return;
		}
		try {
			setTxStatus(WAITING);
			disableButton(true);
			const tx = await togaContract.changeExitRate(
				selectedToken.id,
				BigNumber.from(exitRatePerSecond.toString()),
			);
			const receipt = await tx.wait();
			setTxStatus(receipt.status ? SUCCESSFUL : FAILED);
		} catch (error) {
			console.error('Unable to change exit rate', error);
			setTxStatus(FAILED);
		}
		disableButton(false);

		setTimeout(() => {
			setTxStatus(NO_TRANSACTION);
			closeModal();
		}, 3000);
	}

	let content;
	if (txStatus === WAITING) {
		content = <PageLoader />;
	} else if (txStatus === NO_TRANSACTION) {
		content = (
			<React.Fragment>
				<LabelledInput
					label={`New Exit Rate (${selectedToken.symbol}/day)`}
					value={exitRate}
					onChange={(e) => {
						setInputError('');
						setExitRate(e.target.value);
					}}
				/>
				{inputError ? <HelperText>{inputError}</HelperText> : null}
				<ControlsContainer>
					<Button text={'Confirm'} onClick={changeExitRate} />
					<Button
						onClick={closeModal}
						negative={true}
						text={'Cancel'}
					/>
				</ControlsContainer>
			</React.Fragment>
		);
	} else if (txStatus === SUCCESSFUL) {
		content = <BigInfo text={'Exit rate changed successfully'} />;
	} else if (txStatus === FAILED) {
		content = <BigInfo text={'Exit rate change failed'} />;
	}

	return (
		<ExitRateModalContainer enabled={enabled}>
			{content}
		</ExitRateModalContainer>
	);
}

export default ExitRateModal;
