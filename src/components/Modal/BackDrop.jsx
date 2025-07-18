// import React from 'react'
// import styled from 'styled-components';

// function BackDrop() {
//   return (
//     <KBackdrop />

    
//   )
// }

// export default BackDrop;

// const KBackdrop = styled.div`

//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     z-index: 100;

    
// `

import React from 'react';
import styled from 'styled-components';

function BackDrop({ onClose }) {
  return <KBackdrop onClick={onClose} />;
}

export default BackDrop;

const KBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;
