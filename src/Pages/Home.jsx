// import React from 'react'
// import { BigGradientText,CenterText } from '../styles'


// function Home() {
//   return (
//     <CenterText>
//         <BigGradientText>Home</BigGradientText>
//     </CenterText>
//   )
// }

// export default Home

import React from 'react';
import { BigGradientText, CenterText } from '../styles';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <CenterText>
      <Wrapper>
        <BigGradientText>Focus. Work. Break.</BigGradientText>
        <SubHeading>Click below to start your Pomodoro session.</SubHeading>
        <StartButton onClick={() => navigate('/services/pomodoro')}>
          Start Pomodoro
        </StartButton>
      </Wrapper>
    </CenterText>
  );
}

export default Home;

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

const SubHeading = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text};
  margin-top: 1rem;
`;

const StartButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ff6600;
  }
`;
