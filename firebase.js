import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDGuI2tBxevcc6nN4WGlnVuPYSqLmd__4A",
    authDomain: "ecommerce-app-75203.firebaseapp.com",
    projectId: "ecommerce-app-75203",
    storageBucket: "ecommerce-app-75203.appspot.com",
    messagingSenderId: "522666627565",
    appId: "1:522666627565:web:6c478de3b086fc887017e4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
  
export {auth};
export default db;