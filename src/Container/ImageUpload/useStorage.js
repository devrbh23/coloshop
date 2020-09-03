import {useState, useEffect} from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../../Firebase/config';
import './Image.css';

const useStorage = (file) => {
  console.log(file.image.filename.name);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.image.filename.name);
    let fireStoreRef = projectFirestore.collection('items');
    storageRef.put(file.image.filename).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        return setProgress(percentage);
      },
      (err) => {
        return setError(err);
      },
      async () => {
        const createdAt = timestamp();
        const url = await storageRef.getDownloadURL();
        const name = file.name;
        fireStoreRef.add({
          url: url,
          createdAt,
          name: name,
          cat: file.category,
          size: file.size,
          price: file.price,
        });
        return setUrl(url);
      }
    );
  }, [file]);

  return {progress, url, error};
};

export default useStorage;
