import React from 'react';
import style from './page.module.css';

import SelectPage from '../Pagination/SelectPage';

const Pagination = (props) => {
  const page = props.pageNumber.map((number) => {
    return (
      <div
        key={number}
        onClick={() => props.paginate(number)}
        className={style.pageNumber}
      >
        {number}
      </div>
    );
  });

  return (
    <div className={style.page}>
      <SelectPage
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        arrow={props.arrow}
      ></SelectPage>
      <div className={style.sorting}>
        <div className={style.result}>
          Showing {props.currentPage} – {props.lastPage} of {props.posts}{' '}
          results
        </div>
        <div className={style.number}>
          <span>Show:</span> {page}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
