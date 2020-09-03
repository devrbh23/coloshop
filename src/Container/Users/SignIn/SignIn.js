import React, {useState} from 'react';
import style from './SignIn.module.css';
import {AiOutlineMail} from 'react-icons/ai';
import {FiLock} from 'react-icons/fi';

import {Link} from 'react-router-dom';
import fire from '../../../Firebase/config';

const SignIn = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const input = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user);
  };
  const login = (e) => {
    fire
      .auth()
      .signInWithEmailAndPassword(user.name, user.password)
      .then((userCred) => {})
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };

  return (
    <form>
      <h3>LOG IN</h3>
      <div className={style.loginForm}>
        <div className={style.inputfield}>
          <div className={style.mail}>
            <AiOutlineMail className={style.icon}></AiOutlineMail>
          </div>
          <input
            placeholder="UserName"
            type="text"
            name="name"
            onChange={input}
            value={user.name}
            className={style.input}
          ></input>
        </div>
        <div className={style.inputfield}>
          <div className={style.mail}>
            <FiLock className={style.icon}></FiLock>
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
        <div className={style.checkBox}>
          <input type="checkbox"></input>
          <span>Remember Me</span>
        </div>
        <div className={style.loginButton}>
          <button onClick={login}>
            <Link to="dashboard">LogIn </Link>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
