import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyBDQWnxNz97Gn35UshowWaFD5eL4Y2wZ-I",
  authDomain: "pseudogram-7852e.firebaseapp.com",
  databaseURL: "https://pseudogram-7852e.firebaseio.com",
  projectId: "pseudogram-7852e",
  storageBucket: "pseudogram-7852e.appspot.com",
  messagingSenderId: "966737670524"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
