import React, {useState} from 'react';
import './Account.css';
import {FaAngleDown, FaSignInAlt} from 'react-icons/fa';
import {FiUserPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';
const Account = (props) => {
  const [show, setShow] = useState(false);
  const enter = () => {
    setShow(true);
  };
  const exit = () => {
    setShow(false);
  };

  return (
    <div onMouseEnter={enter} onMouseLeave={exit}>
      <ul className="account">
        <li>
          <a href="/">ACCOUNT</a>
          <FaAngleDown className="angle"></FaAngleDown>
        </li>
      </ul>

      {show && (
        <ul className="acc">
          <li>
            <Link to="signin">
              <FaSignInAlt className="signIn"></FaSignInAlt>Sign in
            </Link>
          </li>
          <li>
            <a href="/">
              <FiUserPlus className="signIn"></FiUserPlus>Register
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Account;
