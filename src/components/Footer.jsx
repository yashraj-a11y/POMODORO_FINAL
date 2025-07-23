import React from 'react';
import styled, { useTheme } from 'styled-components';

const Footer = () => {
  const theme = useTheme();
  const isLight = theme && theme.mode === 'light';
  return (
    <FooterWrapper $isLight={isLight}>
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
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ $isLight }) =>
    $isLight
      ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: ${({ $isLight }) => ($isLight ? '#222' : 'white')};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  box-shadow: 0 -8px 48px rgba(0,0,0,0.10);
  margin-top: 4rem;
  padding: 0;
  transition: background 0.3s, color 0.3s;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  padding: 5rem 8rem 3.5rem 8rem; /* Larger padding */
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem 2rem 1rem;
    gap: 2.5rem;
  }
`;

const FooterSection = styled.div`
  flex: 1 1 260px;
  min-width: 220px;
  margin-bottom: 2.5rem;
`;

const FooterHeading = styled.h4`
  font-size: 2.8rem; /* Larger font size */
  font-weight: 700;
  margin-bottom: 1.7rem;
  color: inherit;
  letter-spacing: 1.5px;
`;

const FooterText = styled.p`
  font-size: 2rem; /* Larger font size */
  color: ${({ theme }) => (theme.mode === 'light' ? '#444' : '#e0e0e0')};
  margin: 0;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => (theme.mode === 'light' ? '#222' : '#fff')};
  text-decoration: none;
  font-size: 1.8rem; /* Larger font size */
  transition: color 0.2s;
  &:hover {
    color: #00f2fe;
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2.2rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px; /* Larger size */
  height: 64px; /* Larger size */
  background: ${({ theme }) =>
    theme.mode === 'light'
      ? 'rgba(0,0,0,0.06)'
      : 'rgba(255,255,255,0.12)'};
  border-radius: 50%;
  font-size: 2.7rem; /* Larger icon size */
  color: ${({ theme }) => (theme.mode === 'light' ? '#222' : '#fff')};
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #00f2fe;
    color: #764ba2;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 3rem 0.5rem 2.2rem 0.5rem; /* Larger padding */
  background: ${({ $isLight }) =>
    $isLight ? 'rgba(0,0,0,0.03)' : 'rgba(0,0,0,0.08)'};
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  font-size: 1.7rem; /* Larger font size */
  color: ${({ theme }) => (theme.mode === 'light' ? '#444' : '#e0e0e0')};
  letter-spacing: 0.7px;
  @media (max-width: 600px) {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    font-size: 1.2rem;
    padding: 1.7rem 0.2rem 1.2rem 0.2rem;
  }
`;