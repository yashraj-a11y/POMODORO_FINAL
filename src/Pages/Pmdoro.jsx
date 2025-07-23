import React, { useEffect, useContext } from 'react';
import Tags from '../components/Tags/Tags';
import Timer from '../components/Timer/Timer';
import { StateContext } from '../components/StateProvider/StateContext';
import styled from 'styled-components';

const Pmdoro = () => {
  const { setActiveTag } = useContext(StateContext);

  useEffect(() => {
    setActiveTag(0); 
  }, [setActiveTag]);

  return (
    <div>
      <Heading>PomoDoro Break</Heading>
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

export default Pmdoro;

