import * as firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCOjLl5iplWu8EWapPpTbGJHtwcM-Jw4Z4",
  authDomain: "barter-system-1f93f.firebaseapp.com",
  databaseURL: "https://barter-system-1f93f.firebaseio.com",
  projectId: "barter-system-1f93f",
  storageBucket: "barter-system-1f93f.appspot.com",
  messagingSenderId: "137191938518",
  appId: "1:137191938518:web:6524845f219237b81eec77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();