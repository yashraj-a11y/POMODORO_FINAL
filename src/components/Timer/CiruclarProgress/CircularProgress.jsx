import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../StateProvider/StateContext';
import Clock from './Clock/Clock';

const CircularProgress = () => {
  const { progress, setProgress, time, initTime } = useContext(StateContext);

  useEffect(() => {
    setProgress((time / initTime) * 100 || 0);
  }, [time, initTime, setProgress]);

  return (
    <OuterCircle $progress={progress}>
      <InnerCircle>
        <Clock />
      </InnerCircle>
    </OuterCircle>
  );
};

export default CircularProgress;

const OuterCircle = styled.div`
  width: 35rem;
  height: 35rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    ${({ theme }) => theme.colors.primary} ${({ $progress }) => $progress}%,
    transparent ${({ $progress }) => $progress}%
  );

  @media (max-width: 768px) {
    width: 25rem;
    height: 25rem;
  }

  @media (max-width: 480px) {
    width: 20rem;
    height: 20rem;
  }
`;

const InnerCircle = styled.div`
  width: 33rem;
  height: 33rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    width: 23rem;
    height: 23rem;
  }

  @media (max-width: 480px) {
    width: 18rem;
    height: 18rem;
  }
`;
