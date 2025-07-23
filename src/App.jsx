

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import RouteApp from './Route/route';
import GlobalStyle from './globalStyles';
import { theme as lightTheme, darkTheme } from './theme';
import UserDropdown from './components/UserDropDown';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouteApp darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

