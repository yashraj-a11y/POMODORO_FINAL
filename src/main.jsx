

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./globalStyles";
import StateProvider from "./components/StateProvider";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);


