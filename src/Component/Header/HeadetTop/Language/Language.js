import React, {useState} from 'react';
import './Language.css';
import {FaAngleDown} from 'react-icons/fa';
const Language = () => {
  const [show, setShow] = useState(false);
  const enter = () => {
    setShow(true);
  };
  const exit = () => {
    setShow(false);
  };
  return (
    <div onMouseEnter={enter} onMouseLeave={exit}>
      <ul className="language">
        <li>
          <a href="/">ENGLISH</a>
          <FaAngleDown className="angle"></FaAngleDown>
        </li>
      </ul>
      {show && (
        <ul className="lan">
          <li>
            <a href="/">nepali</a>
          </li>
          <li>
            <a href="/">spanish</a>
          </li>
          <li>
            <a href="/">chinese</a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Language;
