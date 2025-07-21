import React, { useEffect, useContext } from 'react';
import Tags from '../components/Tags/Tags';
import Timer from '../components/Timer/Timer';
import { StateContext } from '../components/StateProvider/StateContext';

const Pmdoro = () => {
  const { setActiveTag } = useContext(StateContext);

 
  useEffect(() => {
    setActiveTag(0); 
  }, [setActiveTag]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '4rem' }}>PomoDoro Break</h1>
      
      <Timer />
    </div>
  );
};

export default Pmdoro;

