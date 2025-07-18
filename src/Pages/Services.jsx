// import React from 'react'
// import { BigGradientText,CenterText } from '../styles'


// function Services() {
//   return (
//     <CenterText>
//         <BigGradientText>Services</BigGradientText>
//     </CenterText>
//   )
// }

// export default Services;

import React from 'react';
import { BigGradientText, CenterText } from '../styles';
import styled from 'styled-components';

function Services() {
  return (
    <CenterText>
      <Wrapper>
        <BigGradientText>Pomodoro Services</BigGradientText>
        <SubText>
          Choose from Pomodoro, Short Break, or Long Break from the Services dropdown in the menu.
          Each option includes a live timer and productivity boost.
        </SubText>
      </Wrapper>
    </CenterText>
  );
}

export default Services;

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

const SubText = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
  color: ${props => props.theme.colors.text};
`;
