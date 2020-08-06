import React from 'react';
import style from './Banner.module.css';

const Banner = () => {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.women}>
          <div className={style.womenBack}>
            <a href="/">Womens</a>
          </div>
        </div>

        <div className={style.women}>
          <div className={style.womenBack}>
            <a href="/">Accessories</a>
          </div>
        </div>
        <div className={style.women}>
          <div className={style.womenBack}>
            <a href="/">Hot Sell</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
