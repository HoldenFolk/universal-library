import React from 'react';
import styled from 'styled-components';

const LandingTitle: React.FC = () => {
  return (
    <TitleContainer>
      <Header>Universal Student Library</Header>
      <SubHeader>Free Resources and Information Sharing For Students</SubHeader>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.pre};
  font-size: 3rem; /* Larger font size for landing page impact */
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 0.5rem;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.pre};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;

export default LandingTitle;
