import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import backgroundImage from '../../../assets/backsplash.png';
import LandingTitle from '../../molecule/LandingTitle';
import Button from '../../atomic/Button';

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <PageTemplate>
        <LandingTitle />
        <ButtonContainer>
          <Button
            text="Upload Now"
            variant="fill"
            // onClick={onButtonClick}
          />
          <Button
            text="Example"
            variant="outline"
            // onClick={onContactClick}
          />
        </ButtonContainer>
      </PageTemplate>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  margin-bottom: 2rem;
`;
