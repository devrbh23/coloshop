import React, {useState} from 'react';
import style from './UploadForm.module.css';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [show, setShow] = useState({hide: true});
  const [product, setProduct] = useState();
  const [detail, setDetail] = useState({
    image: {value: '', image: '', filename: ''},
    hide: true,

    name: '',
    price: '',
    category: '',
    size: '',
  });
  const input = (e) => {
    setDetail({...detail, [e.target.name]: e.target.value});
  };
  const onChange = (e) => {
    if (e.target.files.length !== 0) {
      setDetail({
        ...detail,

        image: {
          image: URL.createObjectURL(e.target.files[0]),
          filename: e.target.files[0],
        },
      });
      setShow({hide: false});
    } else {
    }
  };
  const clearImage = (e) => {
    setDetail({...detail, image: {value: ''}});
    console.log(detail.image);
    setShow({hide: true});
    e.preventDefault();
  };

  const clickMe = (e) => {
    // if (
    //   detail.name === '' ||
    //   detail.phone === '' ||
    //   detail.address === '' ||
    //   detail.email === '' ||
    //   detail.image === '' ||
    //   detail.gender === ''
    // ) {
    // console.log(detail);
    // } else {
    setShow({hide: true});
    setProduct({...detail});
    setDetail({
      image: {value: ''},
      hide: true,
      gender: '',
      name: '',
      price: '',
      category: '',
      size: '',
    });
    // }
    console.log(product);
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className={style.container}>
        <form className={style.form} onSubmit={clickMe}>
          <h3 className={style.heading}>Add Product</h3>
          <div className={style.inputFlex}>
            <p className={style.paragraph}>Title:</p>

            <input
              name="name"
              className={style.input}
              type="text"
              placeholder="Title"
              value={detail.name}
              onChange={input}
            />
          </div>

          <div className={style.inputFlex}>
            <p className={style.paragraph}>Price:</p>

            <input
              name="price"
              className={style.input}
              type="text"
              placeholder="Price"
              value={detail.price}
              onChange={input}
            />
          </div>

          <div className={style.inputFlex}>
            <p className={style.paragraph}>Category:</p>

            <input
              name="category"
              className={style.input}
              type="text"
              placeholder="Category"
              value={detail.category}
              onChange={input}
            />
          </div>
          <div className={style.inputFlex}>
            <p className={style.paragraph}>Size:</p>

            <input
              name="size"
              className={style.input}
              type="text"
              placeholder="Size"
              value={detail.size}
              onChange={input}
            />
          </div>

          <div className={style.imageFile}>
            <input
              type="file"
              onChange={onChange}
              className={style.image}
              value={detail.image.value}
            />
          </div>
          <input type="submit" className={style.button} value="submit" />
        </form>

        <div className={style.imageBar}>
          <div>
            {show.hide === false ? (
              <img src={detail.image.image} alt="" className={style.image1} />
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {show.hide === false ? (
              <button onClick={clearImage} className={style.delButton}>
                Delete
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      {product && <ProgressBar file={product} setFile={setProduct} />}
    </React.Fragment>
  );
};

export default UploadForm;
