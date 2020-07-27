import React from 'react';
import './HeaderTop.css';
import Currency from './Currency/Currency';
import Language from './Language/Language';
import Account from './Account/Account';
const HeaderTop = (props) => {
  return (
    <div className="headerTop">
      <div className="offer">FREE SHIPPING ON ALL U.S ORDERS OVER $50</div>
      <div className="navBar">
        <Currency></Currency>
        <Language></Language>
        <Account sign={props.sign}></Account>
      </div>
    </div>
  );
};
export default HeaderTop;
