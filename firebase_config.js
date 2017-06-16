const firebase = require('firebase');

const firebaseConfig = {
  apiKey: '*****',
  authDomain: '*****',
  databaseURL: '*****',
  storageBucket: '*****',
};
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
