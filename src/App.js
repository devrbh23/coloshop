import React from 'react';
import './App.css';
import Header from './Component/Header/MainHeader/Header';
import SignIn from './Component/Header/HeadetTop/Account/SignIn/SignIn';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Image from './Container/ImageUpload/Image';
import ProductList from './Container/Shopping/ProductList/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/signin" component={SignIn}></Route>
        <Route path="/uploadimage" component={Image}></Route> */}
        <ProductList></ProductList>
        <Route path="/" component={Header}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
