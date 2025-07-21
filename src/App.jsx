

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

// import React, { useState, useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase';
// import RouteApp from './Route/Route';
// import AuthWrapper from './components/AuthWrapper';
// import styled from 'styled-components';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return (
//       <LoadingContainer>
//         <LoadingSpinner />
//         <LoadingText>Loading...</LoadingText>
//       </LoadingContainer>
//     );
//   }

//   return (
//     <AuthWrapper user={user}>
//       <RouteApp darkMode={darkMode} setDarkMode={setDarkMode} user={user} />
//     </AuthWrapper>
//   );
// }

// export default App;

// // Loading Components
// const LoadingContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
// `;

// const LoadingSpinner = styled.div`
//   width: 50px;
//   height: 50px;
//   border: 5px solid rgba(255, 255, 255, 0.3);
//   border-top: 5px solid white;
//   border-radius: 50%;
//   animation: spin 1s linear infinite;

//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

// const LoadingText = styled.p`
//   color: white;
//   font-size: 1.2rem;
//   margin-top: 1rem;
//   font-weight: 500;
// `;