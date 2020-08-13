import React, {useState} from 'react';
import style from '../Register//SignUp.module.css';

const SignUp = () => {
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
        <h3>Register</h3>
        <form>
          <div className={style.loginForm}>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              onChange={input}
              value={user.firstName}
              className={style.input}
            ></input>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              onChange={input}
              value={user.lastName}
              className={style.input}
            ></input>

            <input
              placeholder="UserName"
              type="text"
              name="userName"
              onChange={input}
              value={user.userName}
              className={style.input}
            ></input>
            <input
              placeholder="Email"
              type="text"
              name="email"
              onChange={input}
              value={user.email}
              className={style.input}
            ></input>

            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={input}
              value={user.password}
              className={style.input}
            ></input>
            <input
              placeholder="Password"
              type="password"
              name="rpassword"
              onChange={input}
              value={user.rpassword}
              className={style.input}
            ></input>

            <div className={style.loginButton}>
              <button>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
