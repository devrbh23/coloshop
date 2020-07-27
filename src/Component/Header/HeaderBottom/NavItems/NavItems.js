import React from 'react';
import style from './NavItems.module.css';
import {FiSearch} from 'react-icons/fi';
import {FaUserAlt} from 'react-icons/fa';
import {IoMdCart} from 'react-icons/io';

const NavItems = () => {
  return (
    <nav className={style.navBar}>
      <ul className={style.navMenu}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Offer</a>
        </li>
        <li>
          <a href="/">Promotion</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
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

export default NavItems;
