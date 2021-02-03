import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApQulqfGfL2TsMWf8zZP6IpXHoqwL_heQ",
    authDomain: "evernote-clone-5414e.firebaseapp.com",
    projectId: "evernote-clone-5414e",
    storageBucket: "evernote-clone-5414e.appspot.com",
    messagingSenderId: "299869785750",
    appId: "1:299869785750:web:56edb62727ce6d04dffcb7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase