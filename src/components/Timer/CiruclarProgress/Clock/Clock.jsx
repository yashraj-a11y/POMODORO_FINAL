

import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../../StateProvider/StateContext';

const Clock = () => {
  const { time, setTime, isActive, setIsActive, initTime } = useContext(StateContext);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive, setTime]);

  const toggleClock = () => setIsActive(!isActive);

  const resetTime = () => {
    setTime(initTime);
    setIsActive(false);
  };

  const getTime = (time) => {
    const min = String(Math.floor(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={toggleClock}>
        {isActive ? "Pause" : "Start"}
      </StartPauseButton>
      {time === 0 && <ResetButton onClick={resetTime}>Reset</ResetButton>}
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;

const TimerText = styled.h3`
  font-size: 8rem;
`;

const StartPauseButton = styled.button`
  all: unset;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 1rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
`;

const ResetButton = styled(StartPauseButton)`
  color: red;
  font-weight: bold;
`;
