import React, { useEffect, useContext } from 'react';
import Tags from '../components/Tags/Tags';
import Timer from '../components/Timer/Timer';
import { StateContext } from '../components/StateProvider/StateContext';
import styled from 'styled-components';

const LongBreak = () => {
  const { setActiveTag } = useContext(StateContext);

  // Set tag to 2 (Long Break) when component mounts
  useEffect(() => {
    setActiveTag(2); // 0 = Pomodoro, 1 = Short, 2 = Long
  }, [setActiveTag]);

  return (
    <div>
      <Heading>Long Break</Heading>
      <Timer />
    </div>
  );
};

const Heading = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-top: 10rem;
  margin-bottom: 8.5rem;
`;

export default LongBreak;
