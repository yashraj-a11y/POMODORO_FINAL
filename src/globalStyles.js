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
`;

export default GlobalStyle;
