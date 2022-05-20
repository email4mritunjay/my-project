const firebaseConfig = {
    apiKey: "AIzaSyAUJwIyHGZwXwjBaR41dmBV0aYk92A1Y1Q",
    authDomain: "count-app-e16fc.firebaseapp.com",
    projectId: "count-app-e16fc",
    storageBucket: "count-app-e16fc.appspot.com",
    messagingSenderId: "284927573457",
    appId: "1:284927573457:web:5f0ce4985b368110c1b4f0",
    measurementId: "G-N4CDDV20FF"
  };

  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  console.log(db);
  