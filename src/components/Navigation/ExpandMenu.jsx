

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ExpandMenu = ({ route }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Wrapper>
      <ParentButton onClick={() => setIsExpanded(prev => !prev)}>
        {route.name} {isExpanded ? '▲' : '▼'}
      </ParentButton>
      {isExpanded && (
        <SubRoutes>
          {route.subRoutes.map((sub) => (
            <SubRoute to={sub.link} key={sub.name}>
              {sub.name}
            </SubRoute>
          ))}
        </SubRoutes>
      )}
    </Wrapper>
  );
};

export default ExpandMenu;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ParentButton = styled.div`
  padding: 1rem;
  font-size: 2.2rem;
  cursor: pointer;
  font-weight: bold;
  color: ${props => props.theme.colors.text};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SubRoutes = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 0;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text};

  &:hover {
    color: #6f07f6;
    background-color: #eee;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
  }
`;

