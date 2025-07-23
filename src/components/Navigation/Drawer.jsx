

import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import ExpandMenu from './ExpandMenu';
import { Navigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const HandleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (err) {
      console.log('error',err)
    }

  }
  return (
    <>
      {isOpen && <SBackdrop onClick={toggleDrawer} />}
      <SDrawer $isOpen={isOpen}>
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
          <LoginButton onClick={HandleLogout}>LogOut</LoginButton>
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
  transform: translateX(${props => (props.$isOpen ? '0' : '-100%')});
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
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: none;
  }
`;

const SNavbarBrand = styled(Link)`
  font-size: 2.5rem;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;

