

import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

import Pomodoro from '../Pages/PomoDoro';
import Pmdoro from '../Pages/Pmdoro';
import ShortBreak from '../Pages/ShortBreak';
import LongBreak from '../Pages/LongBreak';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import SignInPage from '../Login/SignInPage';
import Register from '../Login/Register';
import Homex from '../Login/Homex';
import LogoutButton from '../Login/Logout';


const RouteApp = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        
        <Route path="/services/pomodoro" element={<Pmdoro />} />
        <Route path="/services/short-break" element={<ShortBreak />} />
        <Route path="/services/long-break" element={<LongBreak />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homex" element={<Homex />} />
        <Route path='/logOut' element={<LogoutButton />} />
        
      </Routes>
    </>
  );
};

export default RouteApp;

