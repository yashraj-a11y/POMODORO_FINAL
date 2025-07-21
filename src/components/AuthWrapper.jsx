// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import SignInPage from '../Login/SignInPage';

// const AuthWrapper = ({ user, children }) => {
//   const location = useLocation();
  
//   // Public routes that don't require authentication
//   const publicRoutes = ['/signin', '/register'];
//   const isPublicRoute = publicRoutes.includes(location.pathname);

//   // If user is not authenticated and trying to access protected route
//   if (!user && !isPublicRoute) {
//     return <SignInPage />;
//   }

//   return children;
// };

// export default AuthWrapper;