import React from 'react';
import style from './NavItems.module.css';
import {FiSearch} from 'react-icons/fi';
import {FaUserAlt} from 'react-icons/fa';
import {IoMdCart} from 'react-icons/io';
import {Link, withRouter} from 'react-router-dom';

const NavItems = (props) => {
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
        <li>
          <a href="/">
            <FiSearch className={style.icon}></FiSearch>
          </a>
        </li>
        <li>
          <a href="/">
            <FaUserAlt className={style.icon}></FaUserAlt>
          </a>
        </li>
        <li className={style.cart}>
          <a href="/">
            <IoMdCart></IoMdCart>
            <i className={style.cartCount}>15</i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(NavItems);
