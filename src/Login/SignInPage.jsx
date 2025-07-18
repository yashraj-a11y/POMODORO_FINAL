// import React, { useState } from 'react';
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate, Link } from 'react-router-dom';

// const SignInPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const provider = new GoogleAuthProvider();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/homex');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const googleClick = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       navigate('/homex');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="container" style={{ width: '50%' }}>
//       <h1 className="text-center">Login</h1>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label>Email</label>
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
//         <button className="btn btn-primary" type="submit">Login</button>
//         <Link to="/register">
//           <p className="text-end">New user? Register</p>
//         </Link>
//       </form>

//       {/* Google Login */}
//       <div className="container text-center mt-3">
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             onClick={googleClick}
//             className="btn d-flex justify-content-center align-items-center"
//             style={{
//               backgroundColor: 'white',
//               width: '72%',
//             }}
//           >
//             <div style={{ width: '12%' }}>
//               <img
//                 src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
//                 alt=""
//                 style={{ width: '100%' }}
//               />
//             </div>
//             <div>
//               <h2
//                 style={{
//                   fontWeight: 'bold',
//                   color: 'red',
//                 }}
//               >
//                 Login With Google
//               </h2>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;


import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/homex');
    } catch (err) {
      alert(err.message);
    }
  };

  const googleClick = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/homex');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
      </form>
      <Link to="/register">New user? Register</Link>
      <GoogleButton onClick={googleClick}>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="google" />
        Login with Google
      </GoogleButton>
    </Container>
  );
};

export default SignInPage;

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
  margin-top: 1rem;
`;

const GoogleButton = styled.button`
  margin-top: 2rem;
  padding: 1rem;
  background: white;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  img {
    width: 24px;
    height: 24px;
  }
`;
