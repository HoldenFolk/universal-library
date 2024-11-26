import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import backgroundImage from '../../../assets/backsplash.png';
import LandingTitle from '../../molecule/LandingTitle';

interface LandingPageProps {
	header?: React.ReactNode;
	footer?: React.ReactNode;
	heroContent?: React.ReactNode;
	children?: React.ReactNode;
}

export const LandingPage = ({
	header,
	footer,
	heroContent,
	children,
	...rest
}: LandingPageProps) => {
	return (
		<LandingPageContainer>
			<PageTemplate
				header={header}
				hero={<HeroContent>{heroContent}</HeroContent>}
				footer={footer}
				{...rest}
			>
				<LandingTitle />
				{children}
			</PageTemplate>
		</LandingPageContainer>
	);
};

// Styled Components
const LandingPageContainer = styled.div`
	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 100vh;
`;

// TODO: Add Font Themes
const HeroContent = styled.div`
	padding: 2rem;
	text-align: center;
	color: white;
	font-size: 2rem;
	font-weight: bold;
	text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;
