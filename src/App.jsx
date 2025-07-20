

import React from 'react';
import { ThemeProvider } from 'styled-components';
import RouteApp from './Route/Route';
import GlobalStyle from './globalStyles';
import { theme as lightTheme, darkTheme } from './theme';

const App = () => {
  
  const darkMode = true;

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouteApp darkMode={darkMode} setDarkMode={() => {}} />
    </ThemeProvider>
  );
};

export default App;

