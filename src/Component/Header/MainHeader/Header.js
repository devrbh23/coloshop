import React from 'react';
import HeaderTop from '../HeadetTop/HeaderTop';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
      <HeaderTop sign={props.sign}></HeaderTop>
      <HeaderBottom></HeaderBottom>
    </div>
  );
};
export default Header;
