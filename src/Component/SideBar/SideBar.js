import React from 'react';
import style from './SideBar.module.css';
import Sliders from '../SideBar/Slider/Sliders';

const SideBar = (props) => {
  return (
    <div className={style.productCat}>
      <div className={style.category}>
        <h5>Product Category</h5>
        {props.cat.map((c) => (
          <ul key={c.value}>
            <li>
              <span onClick={() => props.selectCat(c)}>{c.value}</span>
            </li>
          </ul>
        ))}
      </div>
      <div
        style={{
          borderBottom: 'solid 1px #ebebeb',
          padding: '0 0 20px 0',
          margin: ' 0 0 20px 0',
          width: '100%',
        }}
      >
        <Sliders product={props.product} item={props.filteredItem}></Sliders>
      </div>

      <div>
        <h4>Sizes</h4>
        <div className={style.sizes}>
          <ul>
            <li>
              <input
                type="checkbox"
                value="X"
                onChange={(e) => props.checkBox(e)}
              ></input>
              <span>X</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="XX"
                onChange={(e) => props.checkBox(e)}
              ></input>
              <span>XX</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="XL"
                onChange={(e) => props.checkBox(e)}
              ></input>
              <span>XL</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="XXL"
                onChange={(e) => props.checkBox(e)}
              ></input>
              <span>XXL</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="S"
                onChange={(e) => props.checkBox(e)}
              ></input>
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
  );
};

export default SideBar;
