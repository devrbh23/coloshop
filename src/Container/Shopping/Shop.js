import React, {useState} from 'react';
import style from './Shop.module.css';
import {FaAngleRight} from 'react-icons/fa';
import Items from '../Items/Items';
import SelectPage from '../Items/Pagination/SelectPage';

import Pagination from '../Items/Pagination/Pagination';
import SideBar from '../../Component/SideBar/SideBar';

const Shop = ({product}) => {
  const [cat] = useState([
    {value: 'Women', item: 'women'},
    {value: 'New Arrival', item: 'newArrival'},
    {value: 'Collection', item: 'collection'},
    {value: 'Hot Sell', item: 'hotSell'},
    {value: 'Men', item: 'men'},
  ]);
  const [catValue, setCatValue] = useState();

  const [filteredItem, setFilteredItem] = useState(product);

  const selectCat = (cat) => {
    const prod = product.filter((i) => {
      return i.cat === cat.item;
    });

    setFilteredItem(prod);
    setCatValue(cat.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  const pageNumbers = [];
  for (let p = 1; p <= Math.ceil(filteredItem.length / postPerPage); p++) {
    pageNumbers.push(p);
  }

  const lastPage = pageNumbers[pageNumbers.length - 1];

  const paginate = (numberOfPage) => {
    return setCurrentPage(numberOfPage);
  };

  const arrow = () => {
    const prevPage = currentPage;
    let newP = prevPage + 1;
    if (currentPage !== lastPage) {
      setCurrentPage(newP);
    }
  };
  const checkBox = (e) => {
    const checkItem = product.filter((c) => {
      return c.size === e.target.value;
    });

    setFilteredItem(checkItem);
  };

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
            <span>{catValue}</span>
          </ul>
        </div>
        <div className={style.productContainer}>
          <SideBar
            checkBox={checkBox}
            cat={cat}
            selectCat={selectCat}
          ></SideBar>
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
              <div className={style.select}>
                <SelectPage
                  currentPage={currentPage}
                  lastPage={lastPage}
                  arrow={arrow}
                ></SelectPage>
              </div>
            </div>
            <div>
              <Items
                item={filteredItem}
                currentPage={currentPage}
                postPerPage={postPerPage}
              ></Items>
              <Pagination
                posts={filteredItem.length}
                postsPerPage={postPerPage}
                currentPage={currentPage}
                paginate={paginate}
                arrow={arrow}
                pageNumber={pageNumbers}
                lastPage={lastPage}
              ></Pagination>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Shop;
