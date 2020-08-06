import React, {useState} from 'react';
import './App.css';
import Header from './Component/Header/MainHeader/Header';
// import Item from './Component/Items/Item';
// import Shop from './Container/Shopping/Shop';
import SignIn from './Component/Header/HeadetTop/Account/SignIn/SignIn';
import Footer from './Component/Footer/Footer';
import Contact from './Container/AboutUs/Contact';

function App() {
  const [show, setShow] = useState({route: ''});

  const sign = (e) => {
    e.preventDefault();
    setShow({route: 'sign'});
  };
  const shop = (e) => {
    e.preventDefault();
    setShow({route: 'shop'});
  };
  console.log(show.route);
  return (
    <div className="App">
      {show.route === 'sign' ? (
        <SignIn></SignIn>
      ) : (
        <React.Fragment>
          <Header sign={sign} shop={shop}></Header>
          <Contact></Contact>
          {/* {show.route === 'shop' ? <Shop></Shop> : <Item></Item>} */}
          <Footer></Footer>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
