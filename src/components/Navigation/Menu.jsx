// import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// // import { style } from 'framer-motion/client'

// function Menu({route}) {
//   return (
//     <SMenu>
//         <MenuButton>{route.name}</MenuButton>
//         <SubRoutesContainer>
//             {route.subRoutes.map((subRoute) => (
//                 <SubRoute to={subRoute.link} key={subRoute.name}>{subRoute.name}</SubRoute>
//             ))}
//         </SubRoutesContainer>
//     </SMenu>
//   )
// }
// export default Menu

// const SubRoutesContainer = styled.div`
//     position: absolute;
//     min-width: 32rem;
//     display: flex;
//     flex-direction: column;
//     box-shadow: 0px 8px 16px 0px 0 rgba(0,0,0,0.2);
//     padding: 1rem;
//     left: -1rem;
//     visibility: hidden;
//     opacity: 0;
//     border-radius: 1rem;
//     transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;



// `

// const SMenu = styled.div`
//     position: relative;
//     display: inline-block;

//     &:hover ${ SubRoutesContainer} {
//         visibility: visible;
//         opacity: 1;
//         cursor: pointer;

//     }


// `

// const MenuButton = styled.div`
//     padding: 1rem;
//     &:hover {
//         transition: 0.5s ease;
//         color: black;
//         background-color: white;
//         box-shadow: 0px 0px 10px white;
//     }



// `



// const SubRoute = styled(Link)`
//     text-decoration: none;
//     padding: 1rem;
//     border-radius: 0%.5rem;
//     transition: 0.3s ease-in;
//     &:hover {
//         color: #6f07f6;
//         background-color: #d0a7fc;
//         text-decoration: none;

//     }
// `

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
