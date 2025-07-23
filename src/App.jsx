

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import RouteApp from './Route/route';
import GlobalStyle from './globalStyles';
import { theme as lightTheme, darkTheme } from './theme';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const themeWithMode = darkMode
    ? { ...darkTheme, mode: 'dark' }
    : { ...lightTheme, mode: 'light' };
  return (
    <ThemeProvider theme={themeWithMode}>
      <GlobalStyle />
      <AppWrapper>
        <MainContent>
          <RouteApp darkMode={darkMode} setDarkMode={setDarkMode} />
        </MainContent>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;

