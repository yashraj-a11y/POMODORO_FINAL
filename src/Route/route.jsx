

import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

import Pomodoro from '../Pages/PomoDoro';
import ShortBreak from '../Pages/ShortBreak';
import LongBreak from '../Pages/LongBreak';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import SignInPage from '../Login/SignInPage';
import Register from '../Login/Register';
import Homex from '../Login/Homex';

const RouteApp = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        <Route path="/services/pomodoro" element={<Pomodoro />} />
        <Route path="/services/short-break" element={<ShortBreak />} />
        <Route path="/services/long-break" element={<LongBreak />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homex" element={<Homex />} />
        
      </Routes>
    </>
  );
};

export default RouteApp;

