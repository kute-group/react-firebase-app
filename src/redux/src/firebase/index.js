import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCZZGVdty7x_zgzsDcDsdnAYjAmGAqC23E',
    authDomain: 'luongbahop1993.firebaseapp.com',
    databaseURL: 'https://luongbahop1993.firebaseio.com',
    storageBucket: 'luongbahop1993.appspot.com',
};

firebase.initializeApp(config);
const database = firebase.database();
const storage = firebase.storage();
const auth = firebase.auth();

export { storage, auth };
export default database;