import React, {useState} from 'react';
import './App.css';
import Header from './Component/Header/MainHeader/Header';
import Item from './Component/Items/Item';
import SignIn from './Component/Header/HeadetTop/Account/SignIn/SignIn';

function App() {
  const [show, setShow] = useState(false);

  const sign = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(show);
  };
  return (
    <div className="App">
      {show ? (
        <SignIn></SignIn>
      ) : (
        <React.Fragment>
          <Header sign={sign}></Header>
          <Item></Item>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
