import firebase from 'firebase/app';
import "firebase/auth";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDQVTIrirZsYWE_O9SBGHoCOlm-AffoVRI",
    authDomain: "comida-app-3a2a8.firebaseapp.com",
    projectId: "comida-app-3a2a8",
    storageBucket: "comida-app-3a2a8.appspot.com",
    messagingSenderId: "839644060886",
    appId: "1:839644060886:web:180c6807567247eee07d77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const authentication = firebase.auth();

export {authentication};