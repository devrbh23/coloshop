import React, {useState} from 'react';
import style from './NavItems.module.css';
import {FiSearch} from 'react-icons/fi';
import {FaUserAlt} from 'react-icons/fa';
import {IoMdCart} from 'react-icons/io';
import {Link, withRouter} from 'react-router-dom';
import fire from '../../../../Firebase/config';

const NavItems = (props) => {
  const [enter, setEnter] = useState(false);
  const user = () => {
    fire.auth().signOut();
  };

  return (
    <nav className={style.navBar}>
      <ul className={style.navMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={{pathname: '/Shop'}}>Shop</Link>
        </li>
        <li>
          <Link to={{pathname: '/blog'}}>Blog</Link>
        </li>
        <li>
          <a href="/">Offer</a>
        </li>
        <li>
          <a href="/">Promotion</a>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <ul className={style.navIcon}>
        <li className={style.icon}>
          <a href="/">
            <FiSearch></FiSearch>
          </a>
        </li>
        <li className={style.cart}>
          <a href="/">
            <IoMdCart></IoMdCart>
            <i className={style.cartCount}>15</i>
          </a>
        </li>
        <li
          className={style.icon}
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          <a href="/">
            <FaUserAlt></FaUserAlt>
          </a>
          {console.log(enter)}
          {enter && (
            <div className={style.profile}>
              <ul>
                <li>My Account</li>
                <li>My Orders</li>
                <li>Cart</li>
                <li onClick={user}>Log Out</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(NavItems);
