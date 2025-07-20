// ModalContainer.js - Updated with fixes
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
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
      >
        <ModalHeader>
          <ModalTitle>Settings</ModalTitle>
          <ModalCloseButton onClick={onClose} aria-label="Close modal">✕</ModalCloseButton>
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
            validate={(values) => {
              const errors = {};
              if (!values.work || values.work < 1 || values.work > 60) {
                errors.work = 'Must be between 1-60 minutes';
              }
              if (!values.short || values.short < 1 || values.short > 60) {
                errors.short = 'Must be between 1-60 minutes';
              }
              if (!values.long || values.long < 1 || values.long > 60) {
                errors.long = 'Must be between 1-60 minutes';
              }
              return errors;
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <InputWrapper>
                  <FormControl>
                    <label htmlFor="work">Pomodoro</label>
                    <Field name="work" type="number" min="1" max="60" id="work" />
                    {errors.work && touched.work && <ErrorText>{errors.work}</ErrorText>}
                  </FormControl>
                  <FormControl>
                    <label htmlFor="short">Short Break</label>
                    <Field name="short" type="number" min="1" max="60" id="short" />
                    {errors.short && touched.short && <ErrorText>{errors.short}</ErrorText>}
                  </FormControl>
                  <FormControl>
                    <label htmlFor="long">Long Break</label>
                    <Field name="long" type="number" min="1" max="60" id="long" />
                    {errors.long && touched.long && <ErrorText>{errors.long}</ErrorText>}
                  </FormControl>
                </InputWrapper>

                <ButtonWrapper>
                  <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
                  <ApplyButton type="submit">Apply</ApplyButton>
                </ButtonWrapper>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Container>
  );
}

export default ModalContainer;

// Styled Components - Updated
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 150;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
`;

const ModalContent = styled.div`
  width: 60rem;
  max-width: 90vw;
  background-color: ${props => props.theme?.colors?.secondary || '#ffffff'};
  border-radius: 1rem;
  color: ${props => props.theme?.colors?.text || '#000000'};
  padding-bottom: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme?.colors?.text || '#e2e8f0'};
`;

const ModalTitle = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${props => props.theme?.colors?.text || '#000000'};
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme?.colors?.primary || '#e2e8f0'};
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid ${props => props.theme?.colors?.primary || '#3182ce'};
    outline-offset: 2px;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: ${props => props.theme?.colors?.text || '#2d3748'};
  }

  input {
    font-size: 1.6rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid ${props => props.theme?.colors?.text || '#e2e8f0'};
    background: ${props => props.theme?.colors?.bg || '#ffffff'};
    color: ${props => props.theme?.colors?.text || '#2d3748'};
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${props => props.theme?.colors?.primary || '#3182ce'};
      box-shadow: 0 0 0 3px ${props => props.theme?.colors?.primary || '#3182ce'}20;
    }

    &:invalid {
      border-color: #e53e3e;
    }
  }
`;

const ErrorText = styled.div`
  color: #e53e3e;
  font-size: 1.2rem;
  margin-top: 0.25rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BaseButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  min-width: 120px;

  &:focus {
    outline: 2px solid ${props => props.theme?.colors?.primary || '#3182ce'};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ApplyButton = styled(BaseButton)`
  background: ${props => props.theme?.colors?.primary || '#3182ce'};
  color: #fff;

  &:hover:not(:disabled) {
    background: ${props => props.theme?.colors?.text || '#2c5282'};
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const CancelButton = styled(BaseButton)`
  background: transparent;
  color: ${props => props.theme?.colors?.text || '#4a5568'};
  border: 2px solid ${props => props.theme?.colors?.text || '#e2e8f0'};

  &:hover:not(:disabled) {
    background: ${props => props.theme?.colors?.text || '#f7fafc'};
    border-color: ${props => props.theme?.colors?.primary || '#3182ce'};
  }
`;