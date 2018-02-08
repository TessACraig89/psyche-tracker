import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAib3rcnjy_-oJLtdCcssKIFjuvN7z-AGY",
  authDomain: "psyche-tracker.firebaseapp.com",
  databaseURL: "https://psyche-tracker.firebaseio.com",
  projectId: "psyche-tracker",
  storageBucket: "psyche-tracker.appspot.com",
  messagingSenderId: "228341321258"
};
firebase.initializeApp(config);
export default firebase;
