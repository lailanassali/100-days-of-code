import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import Category from './Category';

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
      <Category />
    </header>
  );
};

export default Header;
