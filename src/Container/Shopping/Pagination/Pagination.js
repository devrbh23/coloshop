import React from 'react';
import style from './page.module.css';

import SelectPage from './SelectPage';

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.posts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const page = pageNumbers.map((number) => {
    return (
      <li key={number} className={style.pageNumber}>
        <a href="!#" onClick={() => props.paginate(number)}>
          {number}
        </a>
      </li>
    );
  });
  const lastPage = pageNumbers[pageNumbers.length - 1];

  return (
    <div className={style.page}>
      <SelectPage
        currentPage={props.currentPage}
        lastPage={lastPage}
        arrow={props.arrow}
      ></SelectPage>
      <div className={style.sorting}>
        <div className={style.result}>
          Showing {props.currentPage} – {lastPage} of {props.posts} results
        </div>
        <div className={style.number}>
          <span>Show:</span> {page}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
