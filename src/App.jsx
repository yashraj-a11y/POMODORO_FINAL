
// // import styled from 'styled-components';
// // import Tags from './components/Tags/Tags';
// // import Timer from './components/Timer/Timer';
// // import Modal from './components/Modal/Modal';
// // import { useState } from 'react';
// // import Final from './components/Navbar/final';
// // import Login from './Login/Login';
// // import FirebaseRoute from './Login/firebaseRoute';
// // import Todolist from './components/Navbar/Tasks/Tasks';



// // function App() {

// //   const [isOpen,setIsOpen] = useState(false);

// //   const onClose = () =>{
// //     setIsOpen(false)
// //   }

// //   const onOpen = () => {
// //     setIsOpen(true)
// //   }

  

// //   return (
// //     <>
// //     {/* <Final />
// //     <Title>Pomodoro</Title>
// //     <Tags />
// //     <Timer />
// //     <CogIcon onClick={onOpen}>⚙️</CogIcon>     

// //  <Modal isOpen={isOpen} onClose={onClose}/>  */}

// //       {/* <FirebaseRoute /> */}
// //       <Todolist />
    
// //     </>
// //   )
// // }

// // export default App;


// // const Title = styled.h1`
// //   background-color: fff;
// //   color: #333;
// //   padding: 1rem;
// //   text-align: center;
// //   font-size: 6rem
// // `;

// // const CogIcon = styled.div`
// //     display: flex;
// //     justify-content: center;
// //     font-size: 3rem;

// // `


// import React, { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './theme';
// import GlobalStyle from './globalStyles.js';
// import RouteApp from './Route/Route';

// function App() {
//   const [darkMode, setDarkMode] = useState(true);

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <GlobalStyle />
//       <RouteApp darkMode={darkMode} setDarkMode={setDarkMode} />
//     </ThemeProvider>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import RouteApp from './Route/Route';
import GlobalStyle from './globalStyles';

// Optional: toggle between light and dark themes
const lightTheme = {
  colors: {
    primary: '#b85600',
    secondary: '#f4f4f4',
    bg: '#ffffff',
    text: '#000000',
  },
};

const darkTheme = {
  colors: {
    primary: '#b85600',
    secondary: '#08002b',
    bg: '#220045',
    text: '#ffffff',
  },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouteApp darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
};

export default App;

