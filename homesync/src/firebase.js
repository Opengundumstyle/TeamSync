import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCBWktGfi7cX4skAfeI6W9yhFNMxz_NyRM",
    authDomain: "teamsync-52949.firebaseapp.com",
    projectId: "teamsync-52949",
    storageBucket: "teamsync-52949.appspot.com",
    messagingSenderId: "1012590802151",
    appId: "1:1012590802151:web:33378743a793311a055e42"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.fireStore();

  export default db;

