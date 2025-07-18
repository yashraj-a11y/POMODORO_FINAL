import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${({ theme }) => theme.colors.bg};
    font-size: 62.5%;

    @media (max-width: 768px) {
      font-size: 50%;
    }

    @media (max-width: 450px) {
      font-size: 40%;
    }
  }

  body {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Arial', sans-serif;
  }

  button, input, select, textarea {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 0.4rem;
    padding: 0.8rem 1.6rem;
    font-size: 1.6rem;
    margin: 0.5rem 0;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    outline: none;
  }

  button {
    cursor: pointer;
    font-weight: 600;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  button:hover, button:focus {
    background: #fff;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }

  input, select, textarea {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid #333;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  }

  input:focus, select:focus, textarea:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  }
`;

export default GlobalStyle;
