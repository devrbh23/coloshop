import React, {useState} from 'react';
import style from './Shop.module.css';
import {FaAngleRight} from 'react-icons/fa';
import Items from '../Items/Items';
import SelectPage from './Pagination/SelectPage';
import Sliders from './Slider/Sliders';
import Pagination from './Pagination/Pagination';

const Shop = () => {
  const [cat] = useState([
    {value: 'Women', item: 'women'},
    {value: 'New Arrival', item: 'newArrival'},
    {value: 'Collection', item: 'collection'},
    {value: 'Hot Sell', item: 'hotSell'},
    {value: 'Men', item: 'men'},
  ]);
  const [catValue, setCatValue] = useState();

  const [items] = useState([
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 's',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 's',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 's',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 's',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },
    {
      category: 'women',
      size: 'x',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
      price: '290',
      image: require('../Image/shoe.png'),
    },

    {
      id: 4,
      size: 's',
      category: 'women',
      name: ' Mesh Shoes',
      price: '214',
      image: require('../Image/shoe.png'),
    },
    {
      id: 5,
      size: 's',
      category: 'newArrival',
      name: 'ASIAN Shoes Wonder-13  Shoes',
      price: '204',
      image: require('../Image/shoe.png'),
    },
    {
      id: 3,
      size: 'xx',
      category: 'hotSell',
      name: 'ASIAN Shoes Firozi Mesh Shoes',
      price: '230',
      image: require('../Image/shoe.png'),
    },
    {
      id: 2,
      size: 'xxl',
      category: 'men',
      name: 'ASIAN Shoes Wonder-13 Grey Firozi ',
      price: '250',
      image: require('../Image/shoe.png'),
    },
    {
      id: 1,
      size: 'xl',
      category: 'collection',
      name: 'Wonder-13 Grey Firozi Mesh Shoes',
      price: '240',
      image: require('../Image/shoe.png'),
    },
  ]);
  const [filteredItem, setFilteredItem] = useState(items);

  const selectCat = (cat) => {
    const prod = items.filter((i) => {
      return i.category === cat.item;
    });
    console.log(prod);
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

  const prevPage = currentPage;
  let newP = prevPage + 1;

  const arrow = () => {
    if (currentPage !== lastPage) {
      setCurrentPage(newP);
    }
  };
  const checkBox = (e) => {
    const checkItem = items.filter((c) => {
      return c.size === e.target.value;
    });
    console.log(e.target.value);
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
          <div className={style.productCat}>
            <div className={style.category}>
              <h5>Product Category</h5>
              {cat.map((c) => (
                <ul key={c.value}>
                  <li>
                    <span onClick={() => selectCat(c)}>{c.value}</span>
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
              <Sliders></Sliders>
            </div>

            <div>
              <h4>Sizes</h4>
              <div className={style.sizes}>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      value="x"
                      onChange={(e) => checkBox(e)}
                    ></input>
                    <span>X</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="xx"
                      onChange={(e) => checkBox(e)}
                    ></input>
                    <span>XX</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="xl"
                      onChange={(e) => checkBox(e)}
                    ></input>
                    <span>XL</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="xxl"
                      onChange={(e) => checkBox(e)}
                    ></input>
                    <span>XXL</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="s"
                      onChange={(e) => checkBox(e)}
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
