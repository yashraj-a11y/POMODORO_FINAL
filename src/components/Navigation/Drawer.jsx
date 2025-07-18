// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import ExpandMenu from './ExpandMenu';


// const Drawer = ({ isOpen, toggleDrawer, routes }) => {
//   return (
//     <>
//       {isOpen && <SBackdrop onClick={toggleDrawer} />}
//       <SDrawer isOpen={isOpen}>
//         <RightNav>
//           <SNavbarBrand>LOGO</SNavbarBrand>

//           <NavRoutes onClick={toggleDrawer}>
//           {routes.map((route) => {
//                     if (route.subRoutes) {
//                         return <ExpandMenu route={route} key={route.name}/>
//                     }
//                     return(
//                         <NavRoute to={route.link} key={route.name}>{route.name}</NavRoute>
//                     )    
//                 })};
//           </NavRoutes>
//           <LoginButton>Login</LoginButton>
//         </RightNav>
//       </SDrawer>
//     </>
//   );
// };

// export default Drawer;

// const SBackdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 100;
//   transition: 0.3s ease;
// `;

// const SDrawer = styled.div`
//   z-index: 150;
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 30%;
//   background-color: white;
//   transform: translateX(${(props) => (props.isOpen ? '0' : '-100%')});
//   transition: 0.3s ease;
// `;

// const RightNav = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const NavRoutes = styled.div``;

// const NavRoute = styled(Link)`
//   display: flex;
//   text-decoration: none;
//   color: black;
//   font-size: 2.5rem;
//   padding: 0.5rem;
// `;

// const LoginButton = styled.button`
//   padding: 0.7rem 3rem;
//   background-color: white;
//   border: 1px solid black;
//   border-radius: 3rem;
//   &:hover {
//     transition: 0.3s ease;
//     border: 1px solid transparent;
//     background-color: yellow;
//     box-shadow: 0px 0px 10px yellow;
//     align-self: flex-start;
//   }
// `;

// const SNavbarBrand = styled.h2`
//     all: unset;
//   font-size: 3rem;
// `;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ExpandMenu from './ExpandMenu';

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <SBackdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand to="/" onClick={toggleDrawer}>Pomodoro</SNavbarBrand>
          <NavRoutes>
            {routes.map((route) =>
              route.subRoutes ? (
                <ExpandMenu route={route} key={route.name} />
              ) : (
                <NavRoute to={route.link} key={route.name} onClick={toggleDrawer}>
                  {route.name}
                </NavRoute>
              )
            )}
          </NavRoutes>
          <LoginButton>Login</LoginButton>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;

const SBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const SDrawer = styled.div`
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 75%;
  max-width: 300px;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.text};
  transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  padding: 2rem;
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavRoutes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavRoute = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;

const LoginButton = styled.button`
  padding: 0.7rem 2rem;
  background-color: white;
  border-radius: 2rem;
  border: 1px solid ${props => props.theme.colors.text};

  &:hover {
    background-color: yellow;
    box-shadow: 0 0 10px yellow;
  }
`;

const SNavbarBrand = styled(Link)`
  font-size: 2.5rem;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;

