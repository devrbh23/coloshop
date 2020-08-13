import React, {useState, useEffect} from 'react';

import {projectFirestore} from '../../Firebase/config';

const ImageGrid = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    return projectFirestore
      .collection('items')
      .orderBy('createdAt')
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
        });
        setProducts(documents);
      });
  });

  return (
    <div className="img-grid">
      {product &&
        product.map((doc) => {
          return (
            <div key={doc.id} className="img-wrap">
              <img src={doc.url} alt="/"></img>
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
