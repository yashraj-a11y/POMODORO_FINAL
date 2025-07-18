import React, { useEffect, useContext } from 'react';
import Tags from '../components/Tags/Tags';
import Timer from '../components/Timer/Timer';
import { StateContext } from '../components/StateProvider/StateContext';

const LongBreak = () => {
  const { setActiveTag } = useContext(StateContext);

  // Set tag to 2 (Long Break) when component mounts
  useEffect(() => {
    setActiveTag(2); // 0 = Pomodoro, 1 = Short, 2 = Long
  }, [setActiveTag]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '4rem' }}>Long Break</h1>
      
      <Timer />
    </div>
  );
};

export default LongBreak;
