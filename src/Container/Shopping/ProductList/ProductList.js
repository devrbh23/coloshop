import React, {useState, useEffect} from 'react';
import {projectFirestore} from '../../../Firebase/config';
import Shop from '../Shop';

const ProductList = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    return projectFirestore.collection('items').onSnapshot((snap) => {
      const documents = [];
      snap.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id});
      });
      setProduct(documents);
    });
  }, []);
  console.log(product);
  return product && <Shop product={product}></Shop>;
};

export default ProductList;
