

import React, { useState } from 'react';
import styled from 'styled-components';
import { BigGradientText, CenterText } from '../styles';

function Contact() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback: "${feedback}"`);
    setFeedback('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <CenterText>
      <FormWrapper onSubmit={handleSubmit}>
        <BigGradientText>Contact Us</BigGradientText>

        <StyledLabel htmlFor="feedback">Your Message:</StyledLabel>
        <StyledTextArea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback or suggestions here..."
          required
        />

        <StyledButton type="submit">Submit</StyledButton>

        {submitted && <SuccessMsg>✔️ Feedback sent successfully!</SuccessMsg>}
      </FormWrapper>
    </CenterText>
  );
}

export default Contact;

// Styled Components
const FormWrapper = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledLabel = styled.label`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text};
`;

const StyledTextArea = styled.textarea`
  padding: 1rem;
  font-size: 1.6rem;
  height: 150px;
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: 0.5rem;
  background: #fff;
  color: #000;
  resize: none;
`;

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1.6rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const SuccessMsg = styled.p`
  color: limegreen;
  font-size: 1.4rem;
  text-align: center;
`;
