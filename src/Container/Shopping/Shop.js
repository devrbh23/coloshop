import React from 'react';
import style from './Shop.module.css';
import {FaAngleRight} from 'react-icons/fa';
import Items from '../Items/Items';
import SelectPage from './Pagination/SelectPage';
import Sliders from './Slider/Sliders';

const Shop = () => {
  return (
    <div className={style.container}>
      <div className={style.items}>
        <div className={style.selectedCat}>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li className={style.angle}>
              <FaAngleRight></FaAngleRight>
            </li>
            <span>{}</span>
          </ul>
        </div>
        <div className={style.productContainer}>
          <div className={style.productCat}>
            <div className={style.category}>
              <h5>Product Category</h5>
              <ul>
                <li>
                  <a href="/">Mens</a>
                </li>
                <li>
                  <a href="/">Womens</a>
                </li>
                <li>
                  <a href="/">New Arrivals</a>
                </li>
                <li>
                  <a href="/">Shop</a>
                </li>
                <li>
                  <a href="/">Collection</a>
                </li>
              </ul>
            </div>
            <div
              style={{
                borderBottom: 'solid 1px #ebebeb',
                padding: '0 0 20px 0',
                margin: ' 0 0 20px 0',
                width: '100%',
              }}
            >
              <Sliders></Sliders>
            </div>

            <div>
              <h4>Sizes</h4>
              <div className={style.sizes}>
                <ul>
                  <li>
                    <input type="checkbox"></input>
                    <span>X</span>
                  </li>
                  <li>
                    <input type="checkbox"></input>
                    <span>XX</span>
                  </li>
                  <li>
                    <input type="checkbox"></input>
                    <span>XL</span>
                  </li>
                  <li>
                    <input type="checkbox"></input>
                    <span>XXL</span>
                  </li>
                  <li>
                    <input type="checkbox"></input>
                    <span>S</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Color</h3>
                <div>.....</div>
              </div>
            </div>
          </div>
          <div className={style.itemList}>
            <div className={style.sorting}>
              <div className={style.dropDown}>
                <div className={style.itemSort}>
                  <ul className={style.hover}>
                    <li>
                      <a href="/">Default Sorting</a>
                    </li>
                  </ul>
                  <ul className={style.show}>
                    <li>
                      <a href="/"> price</a>
                    </li>
                    <li>
                      <a href="/"> newest</a>
                    </li>
                    <li>
                      <a href="/"> Top sell</a>
                    </li>
                  </ul>
                </div>
                <div className={style.itemSort}>
                  <ul className={style.hover}>
                    <li>
                      <a href="/"> Show:</a>
                      <span>24</span>
                    </li>
                  </ul>
                  <ul className={style.show}>
                    <li>
                      <a href="/"> 6</a>
                    </li>
                    <li>
                      <a href="/"> 12</a>
                    </li>
                    <li>
                      <a href="/"> 24</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <SelectPage></SelectPage>
              </div>
            </div>
            <div>
              <Items></Items>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Shop;
