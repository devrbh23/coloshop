import React, {useState, useEffect} from 'react';
import './Image.css';
import UploadForm from './UploadForm';
import {projectFirestore} from '../../Firebase/config';

const Image = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    return projectFirestore
      .collection('items')
      .orderBy('createdAt')
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
        });
        setImages(documents);
      });
  }, []);

  return (
    <div>
      <UploadForm></UploadForm>
      {images && (
        <div className="img-grid">
          {images.map((doc) => {
            return (
              <div key={doc.id} className="img-wrap">
                <img src={doc.url} alt="/"></img>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Image;
