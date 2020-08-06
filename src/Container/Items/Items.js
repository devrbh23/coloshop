import React, {useState} from 'react';
import style from './Items.module.css';
import Pagination from '../Shopping/Pagination/Pagination';

const Items = () => {
  const [item, setItem] = useState(
    {
      shoe: [
        {
          name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
          price: '$20',
          image: require('../Image/shoe.png'),
        },
        {
          name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
          price: '$20',
          image: require('../Image/shoe.png'),
        },
        {
          name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoess',
          price: '$20',
          image: require('../Image/shoe.png'),
        },
        {
          name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
          price: '$20',
          image: require('../Image/shoe.png'),
        },
        {
          name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
          price: '$20',
          image: require('../Image/shoe.png'),
        },
        {
          name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
          price: '$20',
          image: require('../Image/shoe.png'),
        },
        {
          name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
          price: '$20',
          image: require('../Image/shoe.png'),
        },
        {
          name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
          price: '$20',
          image: require('../Image/shoe.png'),
        },
      ],
    },
    {women: [{new: {}}]},
    {NewArrivals: [{}]},
    {Shop: [{}]},
    {collection: [{}]}
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const items = item.shoe.map((s) => {
    return (
      <div className={style.shoes}>
        <div className={style.shoe}>
          <img src={s.image} alt="not" className={style.image} />
          <div className={style.sname}>
            <h6>{s.name}</h6>
            <li className={style.price}>{s.price}</li>
          </div>
        </div>

        <div>
          <a href="/" className={style.cart}>
            Add Cart
          </a>
        </div>
      </div>
    );
  });
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (numberOfPage) => {
    return setCurrentPage(numberOfPage);
  };
  const prevPage = currentPage;
  const newP = prevPage + 1;
  const arrow = () => setCurrentPage(newP);

  return (
    <div>
      <div className={style.container}>{currentPost}</div>
      <Pagination
        posts={items.length}
        postsPerPage={postPerPage}
        currentPage={currentPage}
        paginate={paginate}
        arrow={arrow}
      ></Pagination>
    </div>
  );
};

export default Items;
