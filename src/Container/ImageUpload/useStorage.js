import {useState, useEffect} from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../../Firebase/config';
import './Image.css';

const useStorage = (file) => {
  console.log(file);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    let fireStoreRef = projectFirestore.collection('items');
    storageRef.put(file).on(
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
        fireStoreRef.add({
          url: url,
          createdAt,
          name: 'Hot Model Dress',
          cat: 'women',
          size: 's',
          price: '20',
        });
        return setUrl(url);
      }
    );
  }, [file]);

  return {progress, url, error};
};

export default useStorage;
