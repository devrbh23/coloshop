import React from 'react';
import './Items.css';
import Banner from '../../Container/Banner/Banner';

const Item = () => {
  return (
    <div>
      <div className="item">
        <div className="summerOffer">
          <h4>SPRING / SUMMER COLLECTION 2017</h4>
          <h1>Get up to 30% Off New Arrivals</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Item;
