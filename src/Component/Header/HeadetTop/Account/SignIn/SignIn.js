import React, {useState} from 'react';
import style from './SignIn.module.css';
import {AiOutlineMail} from 'react-icons/ai';
import {FiLock} from 'react-icons/fi';
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {Link} from 'react-router-dom';

const SignIn = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const input = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user);
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <h3>LOG IN</h3>
        <form>
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
              <button>
                <Link to="/uploadimage">LogIn</Link>
              </button>
            </div>
          </div>
        </form>

        <p className={style.or}>Or LogIn With</p>
        <div className={style.gf}>
          <div className={style.facebook}>
            <FaFacebook></FaFacebook>
            <span>faceBook</span>
          </div>
          <div className={style.facebook}>
            <FcGoogle></FcGoogle>
            <span>Google</span>
          </div>
        </div>
        <div className={style.memberSignup}>
          <span>Not A Member?</span>
          <a href="/">Sign Up Now</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
