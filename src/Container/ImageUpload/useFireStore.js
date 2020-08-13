import {useState, useEffect} from 'react';
import {projectFirestore} from '../../Firebase/config';

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collet = projectFirestore
      .collection(collection)
      .orderBy('createdAt')
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setDocs(documents);
      });

    return () => collet();
  }, [collection]);

  return {docs};
};

export default useFireStore;
