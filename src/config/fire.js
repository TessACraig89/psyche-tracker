import firebase from 'firebase'
var api_key = process.env.API_KEY;

var config = {
    apiKey: api_key,
    authDomain: "psyche-tracker.firebaseapp.com",
    databaseURL: "https://psyche-tracker.firebaseio.com",
    projectId: "psyche-tracker",
    storageBucket: "psyche-tracker.appspot.com",
    messagingSenderId: "228341321258"
  };

  var fire = firebase.initializeApp(config);

  export default fire;
