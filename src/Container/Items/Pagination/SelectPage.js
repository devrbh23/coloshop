import React from 'react';
import style from './page.module.css';
import {FaLongArrowAltRight} from 'react-icons/fa';

const SelectPage = (props) => {
  return (
    <div className={style.count}>
      <div className={style.currentPage}>
        <span>{props.currentPage}</span>
      </div>
      <div className={style.lastPage}>
        of <span>{props.lastPage}</span>
      </div>

      <FaLongArrowAltRight
        onClick={props.arrow}
        className={style.ArrowAltRight}
      ></FaLongArrowAltRight>
    </div>
  );
};

export default SelectPage;
