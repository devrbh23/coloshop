import React from 'react';
import './App.css';
import Header from './Component/Header/MainHeader/Header';
import SignIn from './Component/Header/HeadetTop/Account/SignIn/SignIn';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/" component={Header}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
