
import React from 'react';
import styled from 'styled-components';
import CircularProgress from './CiruclarProgress/CircularProgress';

const Timer = () => {
  return (
    <TimerContainer>
      <CircularProgress />
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
  width: 45rem;
  height: 45rem;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${props => props.theme.colors.bg};
  box-shadow: 
    -50px -50px 150px rgba(158,158,158,0.2),
    50px -10px 100px rgba(0,0,0,0.5);
`;
