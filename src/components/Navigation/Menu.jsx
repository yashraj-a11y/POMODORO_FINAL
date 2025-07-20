
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map(sub => (
          <SubRoute to={sub.link} key={sub.name}>{sub.name}</SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;

const SMenu = styled.div`
  position: relative;

  &:hover div {
    visibility: visible;
    opacity: 1;
  }
`;

const MenuButton = styled.div`
  padding: 1rem;
  cursor: pointer;
`;

const SubRoutesContainer = styled.div`
  position: absolute;
  top: 100%;
  min-width: 200px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 1rem;
  z-index: 999;
`;

const SubRoute = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: ${props => props.theme.colors.text};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;
