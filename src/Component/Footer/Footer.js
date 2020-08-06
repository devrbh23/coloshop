import React from 'react';
import style from './Footer.module.css';
import image from '../../Container/Image/12.jpg';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.subscribes}>
        <div className={style.newsSubs}>
          <div className={style.newsLetter}>
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>
          <div className={style.inputField}>
            <div className={style.email}>
              <input className={style.input}></input>
            </div>
            <div className={style.subscribeBut}>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className={style.footer}>
          <div className={style.logo}>
            <div className={style.logoImage}>
              <h1>THE COLOSHOP</h1>
              <img src={image} alt=""></img>
            </div>
            <div className={style.socialLogo}>
              <h2>FOLLOWS US</h2>
              <div>
                <AiFillTwitterCircle
                  className={style.icon}
                ></AiFillTwitterCircle>
                <FaFacebook className={style.icon}></FaFacebook>
                <FaLinkedin className={style.icon}></FaLinkedin>
                <FaInstagram className={style.icon}></FaInstagram>
              </div>
            </div>
          </div>
          <div className={style.aboutSec}>
            <div className={style.about}>
              <h5>ABOUT US</h5>
            </div>
            <div className={style.costumerCare}>
              <h5>CUSTOMER CARE</h5>
              <ul>
                <li>
                  <a href="/">SHIPPING INFO</a>
                </li>
                <li>
                  <a href="/"> INTERNATIONAL SHIPPING + RETURNS</a>
                </li>
                <li>
                  <a href="/">RETURNS + EXCHANGES</a>
                </li>
                <li>
                  <a href="/">FIT GUIDE</a>
                </li>
              </ul>
            </div>
            <div className={style.shop}>
              <h5>SHOP</h5>
              <ul>
                <li>
                  <a href="/">SHOP </a>
                </li>
                <li>
                  <a href="/">GIFT CARDS</a>
                </li>
                <li>
                  <a href="/">LOOKBOOK</a>
                </li>
                <li>
                  <a href="/">RETAILERS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.copy}>
          <p> © 2020 Dev Raj. All Rights Reserved. Site By Dev Raj</p>
          <div className={style.terms}>
            <a href="/"> TERMS </a>
            <span>
              <a href="/"> SOCIAL COMPLIANCE </a>
            </span>
            <a href="/"> PRIVACY POLICY</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
