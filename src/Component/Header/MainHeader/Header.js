import React from 'react';
import HeaderTop from '../HeadetTop/HeaderTop';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import './Header.css';

import Contact from '../../AboutUs/Contact';
import Footer from '../../Footer/Footer';
import {Route, Switch} from 'react-router-dom';
import Blog from '../../Blogger/Blog';
import OfferSlider from '../../Offer/OfferSlider';
import ProductList from '../../../Container/Shopping/ProductList/ProductList';
import Dashboard from '../../../Container/Users/Dashboard/Dashboard';

const Header = () => {
  return (
    <div>
      <div className="header">
        <HeaderTop></HeaderTop>
        <HeaderBottom></HeaderBottom>
      </div>
      <Switch>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/shop" component={ProductList}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/" exact component={OfferSlider}></Route>
      </Switch>
      <Route path="/" component={Footer}></Route>
    </div>
  );
};
export default Header;
