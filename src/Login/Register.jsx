

// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate('/homex');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="container" style={{ width: '50%' }}>
//       <h1 className="text-center">Register</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>
//         <button className="btn btn-primary" type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/homex');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit">Register</Button>
      </form>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 50%;
  margin: 5rem auto;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 80%;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.6rem;
`;

const Button = styled.button`
  padding: 1rem 3rem;
  font-size: 1.6rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
`;
