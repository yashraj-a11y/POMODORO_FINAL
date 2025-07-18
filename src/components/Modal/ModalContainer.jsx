import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import { StateContext } from '../StateProvider/StateContext';

function ModalContainer({ onClose }) {
  const {
    workTime, setWorkTime,
    shortBreakTime, setShortBreakTime,
    longBreakTime, setLongBreakTime
  } = useContext(StateContext);

  return (
    <Container>
      <ModalContent
        as={motion.div}
        initial={{ y: '-100vh', scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: '-100vh', scale: 0.8 }}
        onClick={e => e.stopPropagation()}
      >
        <ModalHeader>
          <ModalTitle>Settings</ModalTitle>
          <ModalCloseButton onClick={onClose}>✕</ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          <Formik
            initialValues={{
              work: Math.ceil(workTime / 60),
              short: Math.ceil(shortBreakTime / 60),
              long: Math.ceil(longBreakTime / 60)
            }}
            onSubmit={(values) => {
              setWorkTime(values.work * 60);
              setShortBreakTime(values.short * 60);
              setLongBreakTime(values.long * 60);
              onClose();
            }}
          >
            <Form>
              <InputWrapper>
                <FormControl>
                  <label htmlFor="work">Pomodoro</label>
                  <Field name="work" type="number" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="short">Short Break</label>
                  <Field name="short" type="number" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="long">Long Break</label>
                  <Field name="long" type="number" min="1" max="60" />
                </FormControl>
              </InputWrapper>

              <ButtonWrapper>
                <ApplyButton type="submit">Apply</ApplyButton>
              </ButtonWrapper>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Container>
  );
}

export default ModalContainer;

// Styled Components
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 150;
`;

const ModalContent = styled.div`
  width: 60rem;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 1rem;
  color: ${props => props.theme.colors.text};
  padding-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.text};
`;

const ModalTitle = styled.h1`
  font-size: 3rem;
`;

const ModalCloseButton = styled.button`
  background: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1.6rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
`;

const ApplyButton = styled.button`
  padding: 1rem 4rem;
  font-size: 1.6rem;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, color 0.2s, opacity 0.2s;

  &:hover {
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.primary};
    opacity: 0.9;
  }
`;
