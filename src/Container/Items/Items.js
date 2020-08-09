import React from 'react';
import style from './Items.module.css';

import Product from './Product/Product';

const Items = (props) => {
  console.log(props.item);
  const items = props.item.map((s, i) => {
    return (
      <Product key={i} name={s.name} image={s.image} price={s.price}></Product>
    );
  });

  const indexOfLastPost = props.currentPage * props.postPerPage;
  const indexOfFirstPost = indexOfLastPost - props.postPerPage;
  const currentPost = items.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
      <div className={style.container}>{currentPost}</div>
    </div>
  );
};

export default Items;
