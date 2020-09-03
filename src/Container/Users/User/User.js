import React, {useEffect, useState} from 'react';

import Fire from '../../../Firebase/config';

import {FaFacebook, FaHome} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import style from './User.module.css';
import SignUp from '../Register/SignUp';
import SignIn from '../SignIn/SignIn';
import {Route, Link} from 'react-router-dom';
import Header from '../../../Component/Header/MainHeader/Header';
import Dashboard from '../Dashboard/Dashboard';

const User = () => {
  const [signUp, setSignUp] = useState({show: false});
  const [user, setUser] = useState();

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        console.log(user);
        setUser(null);
      }
    });
  };
  const signup = (e) => {
    setSignUp({show: !signUp.show});
    console.log(signUp);
  };

  return (
    <div>
      {user ? (
        <Dashboard></Dashboard>
      ) : (
        <div className={style.container}>
          <div className={style.form}>
            <Link to="/home">
              <FaHome className={style.home}></FaHome>
            </Link>

            <Route path="/signin" component={SignIn}></Route>

            <Route path="/signup" component={SignUp}></Route>

            <div className={style.line}>
              <span className={style.span}></span>
              <p className={style.or}>Or</p>
              <span className={style.span}></span>
            </div>
            <p className={style.option}>LogIn With</p>
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
            {signUp.show ? (
              <div className={style.memberSignup}>
                <span>Not A Member?</span>
                <Link to="/signup" onClick={signup}>
                  Sign Up Now
                </Link>
              </div>
            ) : (
              <div className={style.memberSignup}>
                <span> Already A member</span>
                <Link to="/signin" onClick={signup}>
                  Sign In Now
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
