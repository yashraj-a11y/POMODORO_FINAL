

import React, { useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import { routes } from "../../constant";

const Navigation = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} routes={routes} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import LogoutButton from '../../Login/Logout';
// import styled from 'styled-components';

// const Navigation = ({ darkMode, setDarkMode, user }) => {
//   return (
//     <Nav>
//       <NavBrand>
//         <Link to="/services/pomodoro">Pomodoro Timer</Link>
//       </NavBrand>
      
//       <NavLinks>
//         {user && (
//           <>
//             <NavLink>
//               <Link to="/services/pomodoro">Pomodoro</Link>
//             </NavLink>
//             <NavLink>
//               <Link to="/services/short-break">Short Break</Link>
//             </NavLink>
//             <NavLink>
//               <Link to="/services/long-break">Long Break</Link>
//             </NavLink>
//             <NavLink>
//               <Link to="/products">Products</Link>
//             </NavLink>
//             <NavLink>
//               <Link to="/contact">Contact</Link>
//             </NavLink>
//           </>
//         )}
//       </NavLinks>

//       <NavActions>
//         <DarkModeToggle onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? '☀️' : '🌙'}
//         </DarkModeToggle>
        
//         {user ? (
//           <UserSection>
//             <UserEmail>{user.email}</UserEmail>
//             <LogoutButton />
//           </UserSection>
//         ) : (
//           <AuthLinks>
//             <Link to="/signin">Sign In</Link>
//             <Link to="/register">Register</Link>
//           </AuthLinks>
//         )}
//       </NavActions>
//     </Nav>
//   );
// };

// export default Navigation;

// // Styled Components for Navigation
// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
// `;

// const NavBrand = styled.div`
//   a {
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: white;
//     text-decoration: none;
//   }
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 2rem;
  
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const NavLink = styled.div`
//   a {
//     color: white;
//     text-decoration: none;
//     font-weight: 500;
//     transition: opacity 0.2s ease;
    
//     &:hover {
//       opacity: 0.8;
//     }
//   }
// `;

// const NavActions = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const DarkModeToggle = styled.button`
//   background: rgba(255, 255, 255, 0.2);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   font-size: 1.2rem;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.3);
//   }
// `;

// const UserSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const UserEmail = styled.span`
//   color: white;
//   font-size: 0.9rem;
//   opacity: 0.9;
// `;

// const AuthLinks = styled.div`
//   display: flex;
//   gap: 1rem;
  
//   a {
//     color: white;
//     text-decoration: none;
//     padding: 0.5rem 1rem;
//     border: 1px solid rgba(255, 255, 255, 0.3);
//     border-radius: 5px;
//     transition: all 0.2s ease;
    
//     &:hover {
//       background: rgba(255, 255, 255, 0.2);
//     }
//   }
// `;