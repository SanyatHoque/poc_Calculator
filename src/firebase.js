import firebase from 'firebase'
import "firebase/auth"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDkQ_1smpk19RiLPjiBhxGJfRwGdvp1FR0",
    authDomain: "poccalculator-67fea.firebaseapp.com",
    projectId: "poccalculator-67fea",
    storageBucket: "poccalculator-67fea.appspot.com",
    messagingSenderId: "928224948221",
    appId: "1:928224948221:web:35451838f21735f0dbf394"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase
