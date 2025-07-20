import React, { useState } from 'react';
import styled from 'styled-components';
import Tags from '../components/Tags/Tags';
import Timer from '../components/Timer/Timer';
import Modal from '../components/Modal/Modal';
import Todolist from '../components/Navbar/Tasks/Tasks';
import ModalContainer from '../components/Modal/ModalContainer';


const Pomodoro = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Title>Pomodoro</Title>

      <Tags />

      <TimerWrapper>
        <Timer />
        <div onClick={e => { e.stopPropagation(); setIsOpen(true); }}>⚙️</div>
      </TimerWrapper>

      <TodolistWrapper>
        <Todolist />
      </TodolistWrapper>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContainer onClose={() => setIsOpen(false)} />
      </Modal>
    </Wrapper>
  );
};

export default Pomodoro;

// Styled Components
const Wrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const TimerWrapper = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingsIcon = styled.div`
  font-size: 3rem;
  margin-top: 2rem;
  cursor: pointer;
  color: white;
`;

const TodolistWrapper = styled.div`
  margin-top: 3rem;
`;
