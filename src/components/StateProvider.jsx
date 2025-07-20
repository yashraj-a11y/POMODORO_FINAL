

import React, { useState, useEffect } from 'react';
import { StateContext } from './StateProvider/StateContext';

export const StateProvider = ({ children }) => {
  const [activeTag, setActiveTag] = useState(0);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(15 * 60);
  const [initTime, setInitTime] = useState(workTime);

  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
      default:
        break;
    }
    setIsActive(false); // reset timer on tag change
  }, [activeTag, workTime, shortBreakTime, longBreakTime]);

  return (
    <StateContext.Provider
      value={{
        activeTag, setActiveTag,
        progress, setProgress,
        time, setTime,
        isActive, setIsActive,
        initTime, setInitTime,
        workTime, setWorkTime,
        shortBreakTime, setShortBreakTime,
        longBreakTime, setLongBreakTime
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
