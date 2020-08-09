import React from 'react';
import style from './Product.module.css';

const Product = (props) => {
  return (
    <div className={style.shoes}>
      <div className={style.shoe}>
        <img src={props.image} alt="not" className={style.image} />
        <div className={style.sname}>
          <h6>{props.name}</h6>
          <li className={style.price}>${props.price}</li>
        </div>
      </div>
      <div>
        <a href="/" className={style.cart}>
          Add Cart
        </a>
      </div>
    </div>
  );
};

export default Product;
