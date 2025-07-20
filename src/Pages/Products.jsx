

import React from 'react';
import styled from 'styled-components';
import Todolist from '../components/Navbar/Tasks/Tasks';

function Products() {
  return (
    <Wrapper>
      <Title>My Task List</Title>
      <Description>
        Use the task manager below to list your goals for each Pomodoro session.
        Add, edit, and delete tasks as needed.
      </Description>
      <Todolist />
    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.div`
  padding: 3rem 2rem;
  color: ${props => props.theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 2rem;
`;
