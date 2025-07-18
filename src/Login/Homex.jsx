import React from 'react';
import Final from '../components/Navbar/final';
import Tags from '../components/Tags/Tags';
import Timer from '../components/Timer/Timer';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Homex = () => {
  
  const auth = getAuth()
  const navigate = useNavigate()

  const logOut = async () => {
  await auth.signOut
    navigate('/')
  }

  return (
    <>
      

      <div>Thank u for Visiting</div>
      <h1></h1>
      <div>
        <h1>{auth.currentUser.displayName}</h1>
        <h2>{auth.currentUser.photoURL}</h2>
      </div>
      <button onClick={logOut} className="btn btn-warning">Logout</button>

    </>
  );
};

export default Homex;
