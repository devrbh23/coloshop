import React, {useState, useEffect} from 'react';
import style from './SignUp.module.css';
import {AiOutlineMail} from 'react-icons/ai';
import {FiKey, FiUser} from 'react-icons/fi';

import {Link} from 'react-router-dom';
import fire from '../../../Firebase/config';

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: '',
  });
  const input = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };
  const register = (e) => {
    e.preventDefault();
    if (user.password === user.cPassword) {
      fire
        .auth()
        .createUserWithEmailAndPassword(user.email, user.cPassword)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          return console.log(err);
        });
    } else {
      alert('password wrong');
    }
  };

  return (
    <form>
      <h3>Sign Up</h3>
      <div className={style.loginForm}>
        <div className={style.inputfield}>
          <div className={style.mail}>
            <FiUser className={style.icon}></FiUser>
          </div>
          <input
            placeholder="Full Name"
            type="text"
            name="name"
            onChange={input}
            value={user.name}
            className={style.input}
          ></input>
        </div>
        <div className={style.inputfield}>
          <div className={style.mail}>
            <AiOutlineMail className={style.icon}></AiOutlineMail>
          </div>
          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={input}
            value={user.email}
            className={style.input}
          ></input>
        </div>
        <div className={style.inputfield}>
          <div className={style.mail}>
            <FiKey className={style.icon}></FiKey>
          </div>
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={input}
            value={user.password}
            className={style.input}
          ></input>
        </div>
        <div className={style.inputfield}>
          <div className={style.mail}>
            <FiKey className={style.icon}></FiKey>
          </div>
          <input
            placeholder="Confirm Password"
            type="password"
            name="cPassword"
            onChange={input}
            value={user.cPassword}
            className={style.input}
          ></input>
        </div>
        <div className={style.loginButton}>
          <button onClick={register}>Register Now</button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
