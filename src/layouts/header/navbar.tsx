import { TopNavbar } from 'pattern/header/topNav';
import { MiddleNavbar } from 'pattern/header/middleNav';
import { EndNavbar } from 'pattern/header/endNav';
import './style.css';
import { useState } from 'react';


export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerFunction = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg navbarCustom py-0">
      <div className="custom-container">
        <TopNavbar />
        <MiddleNavbar onClick={openDrawerFunction} />
        <EndNavbar isOpenDrawer={openDrawerFunction} isDrawerOpen={isDrawerOpen} />
      </div>
    </nav>
  );
};