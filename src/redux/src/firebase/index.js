import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCZZGVdty7x_zgzsDcDsdnAYjAmGAqC23E',
  authDomain: 'luongbahop1993.firebaseapp.com',
  databaseURL: 'https://luongbahop1993.firebaseio.com'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;