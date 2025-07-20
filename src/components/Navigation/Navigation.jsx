

import React, { useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import { routes } from "../../constant";

const Navigation = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} routes={routes} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
