// import React from 'react'
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
// import Home from '../Pages/Home'
// import About from '../Pages/About'
// import Contact from '../Pages/Contact'
// import Products from '../Pages/Products'
// import Services from '../Pages/Services'
// import Navigation from '../components/Navigation/Navigation'


// const  App = () => {
//   return (
//     <Router>
//         <Navigation />
//         <Routes>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/about" element={<About />}></Route>
//             <Route path="/contact" element={<Contact />}></Route>
//             <Route path="/products" element={<Products />}></Route>
//             <Route path="/services" element={<Services />}></Route>
//         </Routes>
//     </Router>
//   )
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navigation from '../components/Navigation/Navigation';

// // Pages
// import Pomodoro from '../Pages/Pomodoro';
// import ShortBreak from '../Pages/ShortBreak';
// import LongBreak from '../Pages/LongBreak';
// import Services from '../Pages/Services';
// import Products from '../Pages/Products';
// import Contact from '../Pages/Contact';

// function RouteApp({ darkMode, setDarkMode }) {
//   return (
//     <Router>
//       <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Routes>
//         <Route path="/" element={<Pomodoro />} /> {/* Home = Pomodoro */}
//         <Route path="/services" element={<Services />} />
//         <Route path="/services/pomodoro" element={<Pomodoro />} />
//         <Route path="/services/short-break" element={<ShortBreak />} />
//         <Route path="/services/long-break" element={<LongBreak />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default RouteApp;

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

