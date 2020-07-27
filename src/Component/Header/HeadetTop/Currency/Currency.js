import React, {useState} from 'react';
import './currency.css';
import {FaAngleDown} from 'react-icons/fa';
const Currency = (props) => {
  const [show, setShow] = useState(false);
  const enter = () => {
    setShow(true);
  };
  const exit = () => {
    setShow(false);
  };

  return (
    <div onMouseEnter={enter} onMouseLeave={exit}>
      <div className="currency">
        <li>
          <a href="/">
            USD <FaAngleDown className="angle"></FaAngleDown>
          </a>
        </li>
      </div>
      {show && (
        <ul className="coin">
          <li>
            <a href="/">AUD</a>
          </li>
          <li>
            <a href="/">EUR</a>
          </li>
          <li>
            <a href="/">CAD</a>
          </li>
          <li>
            <a href="/">NEP</a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Currency;
