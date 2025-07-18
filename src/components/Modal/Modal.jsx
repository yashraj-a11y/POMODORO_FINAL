// import React from 'react'
// // import styled from 'styled-components';
// import BackDrop from './BackDrop';
// import ModalContainer from './ModalContainer';
// import { AnimatePresence } from 'framer-motion';



// const  Modal = ({isOpen,onClose}) => {
//   return (
//     <>
//     <AnimatePresence>
//         {isOpen &&
//             <>
//                 <BackDrop />
//                 <ModalContainer isOpen={isOpen} onClose={onClose}/>
//              </>   
//         }
//     </AnimatePresence>
//     </>
//   )
// }

// export default Modal

// import React from 'react'
// import BackDrop from './BackDrop';
// import ModalContainer from './ModalContainer';
// import { AnimatePresence } from 'framer-motion';

// const Modal = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <BackDrop />
//           <ModalContainer isOpen={isOpen} onClose={onClose} />
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Modal;

import React from 'react';
import BackDrop from './BackDrop';
import ModalContainer from './ModalContainer';
import { AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <BackDrop onClose={onClose} />
          <ModalContainer onClose={onClose} />
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

