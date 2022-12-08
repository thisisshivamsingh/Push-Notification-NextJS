import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDdfLVZjdgRdWwdFMTRAJpQ1raKMIHj2uk",
  authDomain: "fir-push-notifications-e9ad9.firebaseapp.com",
  projectId: "fir-push-notifications-e9ad9",
  storageBucket: "fir-push-notifications-e9ad9.appspot.com",
  messagingSenderId: "739352761091",
  appId: "1:739352761091:web:0d53824aa2094d460d8f36",
};
// Initialize Firebase
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
