

// import React from "react";

// import {createContext,useState,useEffect} from 'react'


// export const StateContext = createContext(null)
 

// export const StateProvider = ({children}) => {
//     const [activeTag,setActiveTag] = useState(0)
//     const [progress,setProgress] = useState(595)
//     const [time,setTime] = useState(50);
//     const [isActive,setIsActive] = useState(false)

//     const[workTime,setWorkTime] = useState(25*60)
//     const[shortBreakTime ,setShortBreakTime] = useState(5)
//     const[longBreakTime,setLongBreakTime] = useState(15*60)
//     const [initTime,setInitTime] = useState(0)

//     useEffect(()=>{
//         switch(activeTag){
//             case 0:
//                 setTime(workTime)
//                 setInitTime(workTime)
//                 break;
//             case 1:
//                 setTime(shortBreakTime)
//                 setInitTime(shortBreakTime)
//                 break;
//             case 2:
//                 setTime(longBreakTime)
//                 setInitTime(longBreakTime)
//                 break;
//             default:
//                 break;

//         }
//     },[activeTag,workTime,shortBreakTime,longBreakTime])






//   return (
//     <StateContext.Provider 
//     value={{
//         activeTag,setActiveTag,progress,setProgress,time,setTime,isActive,setIsActive,initTime,setInitTime,workTime,setWorkTime,longBreakTime,setLongBreakTime,shortBreakTime,setShortBreakTime
//     }}
//     >{children}</StateContext.Provider>
//   )
// }


// export default StateProvider;

import React, { createContext, useState, useEffect } from 'react';

export const StateContext = createContext(null);

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
