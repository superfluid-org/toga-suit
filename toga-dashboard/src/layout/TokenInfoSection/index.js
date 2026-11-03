import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { HeaderContainer, SectionContainer } from '../commonElements';
import Header from '../Controls';
import TokenInfo from '../../components/TokenInfo';
import PICInfo from '../../components/PICInfo';
import LegacyPICPanel from '../../components/LegacyPICPanel';
import {
	SelectedTokenContext,
	SuperTokensContext,
} from '../../components/context';
import BigInfo from '../../components/common/BigInfo';
import SectionHeader from '../../components/common/SectionHeader';
import TokenSelection from '../../components/TokenSelection';

const StackedSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 0;
`;

function TokenInfoSection() {
	const [selectedToken, setSelectedToken] = useState(null);
	const tokenMap = useContext(SuperTokensContext);

	return (
		<SelectedTokenContext.Provider value={selectedToken}>
			<SectionContainer>
				<Header setSelectedToken={setSelectedToken} />
			</SectionContainer>
			<HeaderContainer>
				<SectionHeader
					text={`Token information ${
						selectedToken ? `(${selectedToken.symbol})` : ''
					}`}
				/>
				<TokenSelection setSelectedToken={setSelectedToken} />
			</HeaderContainer>

			{selectedToken ? (
				<React.Fragment>
					<SectionContainer>
						<TokenInfo />
					</SectionContainer>
					<SectionContainer>
						<StackedSection>
							<PICInfo />
							<LegacyPICPanel />
						</StackedSection>
					</SectionContainer>
				</React.Fragment>
			) : (
				<SectionContainer>
					<BigInfo
						text={
							tokenMap.size > 0
								? 'Select a token...'
								: 'No tokens available'
						}
					/>
				</SectionContainer>
			)}
		</SelectedTokenContext.Provider>
	);
}

export default TokenInfoSection;
