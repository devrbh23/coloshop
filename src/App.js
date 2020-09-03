import React from 'react';
import './App.css';
import Header from './Component/Header/MainHeader/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Image from './Container/ImageUpload/Image';

import User from './Container/Users/User/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={User}></Route>
        <Route path="/signup" component={User}></Route>
        <Route path="/uploadimage" component={Image}></Route>
        <Route path="/" component={Header}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
