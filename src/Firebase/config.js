import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBO-Uw5rxisGkvIJPyHqlAjRc5GuIOeWxQ',
  authDomain: 'coloshop-323e7.firebaseapp.com',
  databaseURL: 'https://coloshop-323e7.firebaseio.com',
  projectId: 'coloshop-323e7',
  storageBucket: 'coloshop-323e7.appspot.com',
  messagingSenderId: '759207542761',
  appId: '1:759207542761:web:16b13f4d72df67058d9578',
  measurementId: 'G-3YFR26CRXK',
};

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage, projectFirestore, timestamp};
