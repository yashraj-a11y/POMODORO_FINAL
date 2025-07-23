import React from 'react';
import styled from 'styled-components';


const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <FooterSection>
        <FooterHeading>Pomofocus</FooterHeading>
        <FooterText>
          A simple Pomodoro Timer app that helps you focus on tasks.
        </FooterText>
      </FooterSection>
      <FooterSection>
        <FooterHeading>Resources</FooterHeading>
        <FooterLinks>
          <li><FooterLink href="http://localhost:3001/">About</FooterLink></li>
          <li><FooterLink href="http://localhost:3001/">Privacy Policy</FooterLink></li>
          <li><FooterLink href="http://localhost:3001/">Contact</FooterLink></li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <FooterHeading>Made with ♥</FooterHeading>
        <SocialLinks>
          <SocialIcon href="http://localhost:3001/" aria-label="Phone"><span role="img" aria-label="phone">📱</span></SocialIcon>
          <SocialIcon href="http://localhost:3001/" aria-label="Email"><span role="img" aria-label="email">📧</span></SocialIcon>
          <SocialIcon href="http://localhost:3001/" aria-label="Web"><span role="img" aria-label="web">🌐</span></SocialIcon>
        </SocialLinks>
      </FooterSection>
    </FooterContent>
    <FooterBottom>
      <p>© Pomofocus. All rights reserved.</p>
    </FooterBottom>
  </FooterWrapper>
);

export default Footer; 


const FooterWrapper = styled.footer`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
  margin-top: 3rem;
  padding: 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 3.5rem 5rem 2.5rem 5rem; /* Increased padding */
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1rem 1.5rem 1rem;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
  margin-bottom: 1.5rem;
`;

const FooterHeading = styled.h4`
  font-size: 2.2rem; /* Increased font size */
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #fff;
  letter-spacing: 1px;
`;

const FooterText = styled.p`
  font-size: 1.5rem; /* Increased font size */
  color: #e0e0e0;
  margin: 0;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem; /* Increased font size */
  transition: color 0.2s;
  &:hover {
    color: #00f2fe;
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px; /* Increased size */
  height: 48px; /* Increased size */
  background: rgba(255,255,255,0.12);
  border-radius: 50%;
  font-size: 2rem; /* Increased icon size */
  color: #fff;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #00f2fe;
    color: #764ba2;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 2rem 0.5rem 1.5rem 0.5rem; /* Increased padding */
  background: rgba(0,0,0,0.08);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  font-size: 1.3rem; /* Increased font size */
  color: #e0e0e0;
  letter-spacing: 0.5px;
  @media (max-width: 600px) {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    font-size: 1.1rem;
    padding: 1.2rem 0.2rem 1rem 0.2rem;
  }
`;