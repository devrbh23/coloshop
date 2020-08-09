import React from 'react';
import './HeaderBottom.css';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';

const HeaderBottom = () => {
  return (
    <nav className="headerBottom">
      <Logo></Logo>
      <NavItems></NavItems>
    </nav>
  );
};

export default HeaderBottom;
