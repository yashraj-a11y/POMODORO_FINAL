// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import Menu from './Menu';

// const Navbar = ({ toggleDrawer, routes, darkMode, setDarkMode }) => {
//   return (
//     <SNavbar>
//       <NavContainer>
//         <LeftGroup>
//           <DrawerButton onClick={toggleDrawer}>
//             <FaBars />
//           </DrawerButton>
//           <SNavbarBrand to="/">Pomodoro</SNavbarBrand>
//         </LeftGroup>

//         <RightNav>
//           <NavRoutes>
//             {routes.map((route) =>
//               route.subRoutes ? (
//                 <Menu route={route} key={route.name} />
//               ) : (
//                 <NavRoute to={route.link} key={route.name}>
//                   {route.name}
//                 </NavRoute>
//               )
//             )}
//           </NavRoutes>
//           <LoginButton to="/SignInPage">Login</LoginButton>
//           <ThemeToggle onClick={() => setDarkMode((prev) => !prev)}>
//             {darkMode ? '☀️' : '🌙'}
//           </ThemeToggle>
//         </RightNav>
//       </NavContainer>
//     </SNavbar>
//   );
// };

// export default Navbar;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Menu from './Menu'; // Handles dropdowns like Services

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <LeftGroup>
          <DrawerButton onClick={toggleDrawer}>
            <FaBars />
          </DrawerButton>
          <SNavbarBrand to="/">Pomodoro</SNavbarBrand>
        </LeftGroup>

        <RightNav>
          <NavRoutes>
            {routes.map((route) =>
              route.subRoutes ? (
                <Menu route={route} key={route.name} />
              ) : (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              )
            )}
          </NavRoutes>

          {/* ✅ Fixed Login Link */}
          <LoginButton to="/SignIn">Login</LoginButton>

          {/* Remove ThemeToggle from RightNav and from the component JSX */}
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;



// Styled Components

// const SNavbar = styled.nav`
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: ${({ theme }) => theme.colors.text};
// `;

// const NavContainer = styled.div`
//   padding: 1rem;
//   max-width: 1300px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const LeftGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2rem;
// `;

// const SNavbarBrand = styled(Link)`
//   font-size: 3rem;
//   text-decoration: none;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const RightNav = styled.div`
//   display: flex;
//   gap: 2rem;
//   align-items: center;
// `;

// const NavRoutes = styled.div`
//   display: flex;
//   gap: 1.5rem;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const NavRoute = styled(Link)`
//   text-decoration: none;
//   color: ${({ theme }) => theme.colors.text};
//   font-size: 2rem;

//   &:hover {
//     color: black;
//     background-color: white;
//     border-radius: 1rem;
//     padding: 0.5rem;
//   }
// `;

// // ✅ THIS IS THE FIXED LOGIN BUTTON
// const LoginButton = styled(Link)`
//   padding: 0.7rem 2rem;
//   border: 1px solid ${({ theme }) => theme.colors.text};
//   background-color: white;
//   border-radius: 3rem;
//   font-weight: bold;
//   text-decoration: none;
//   color: ${({ theme }) => theme.colors.text};

//   &:hover {
//     background-color: yellow;
//     box-shadow: 0px 0px 10px yellow;
//     border: none;
//   }
// `;

// const DrawerButton = styled.button`
//   all: unset;
//   font-size: 2.5rem;
//   cursor: pointer;
// `;

// const ThemeToggle = styled.button`
//   background: none;
//   border: none;
//   font-size: 2rem;
//   cursor: pointer;
// `;
const SNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.navbar};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
`;

const NavContainer = styled.div`
  padding: 1rem;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const SNavbarBrand = styled(Link)`
  font-size: 3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

const RightNav = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavRoutes = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavRoute = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.7rem;
  padding: 0.9rem 2rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  height: 3.6rem;
  transition: background 0.2s, text-decoration 0.2s, opacity 0.2s;
  box-sizing: border-box;

  &:hover {
    text-decoration: underline;
    opacity: 0.85;
    background: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

// ✅ Final Login Button (fixed)
const LoginButton = styled(Link)`
  padding: 0.9rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border-radius: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  height: 3.6rem;
  box-sizing: border-box;
  transition: background 0.2s, color 0.2s, opacity 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    opacity: 0.9;
    box-shadow: none;
    border: none;
  }
`;

const DrawerButton = styled.button`
  all: unset;
  font-size: 2.5rem;
  cursor: pointer;
`;

// Remove ThemeToggle from RightNav and from the component JSX
const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;
