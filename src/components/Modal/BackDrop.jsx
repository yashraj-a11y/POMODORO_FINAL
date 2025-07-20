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
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
`;