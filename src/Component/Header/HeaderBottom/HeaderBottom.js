import React from 'react';
import './HeaderBottom.css';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';

const HeaderBottom = (props) => {
  return (
    <nav className="headerBottom">
      <Logo></Logo>
      <NavItems shop={props.shop}></NavItems>
    </nav>
  );
};

export default HeaderBottom;
