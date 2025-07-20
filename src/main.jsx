// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

// import {createGlobalStyle, ThemeProvider} from "styled-components"
// import StateProvider from './components/StateProvider.jsx'



// const GlobalStyle = createGlobalStyle`




// *{
// margin: 0;
// padding: 0;
// box-sizing: border-radius;
// }

// html, body {
// background-color: ${props => props.theme.colors.bg};;
// font-size : 62.5%;


// @media (max-width: 768px) {
//   font-size: 50%;
// }
// @media (max-width: 450px) {
//   font-size:40%
// }
// }
// body{
// font-size: 1.6 rem;
// color: white

// }













// `
// const theme = {
//     colors: {
//       primary: '#b85600',
//       secondary: '#08002b',
//       bg: '#220045',
//     }
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StateProvider>
//       <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         <App />
//       </ThemeProvider>
//     </StateProvider>
//   </StrictMode>
// )


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


