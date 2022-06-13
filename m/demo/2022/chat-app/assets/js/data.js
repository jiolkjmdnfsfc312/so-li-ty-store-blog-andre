// Your web app's Firebase configuration (ENTER YOUR FIREBASE DETAILS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBmiZlEop13KU-NpS2TT8NZGzTtOWPuEKY",
    authDomain: "solityid-demo.firebaseapp.com",
    databaseURL: "https://solityid-demo-default-rtdb.firebaseio.com",
    projectId: "solityid-demo",
    storageBucket: "solityid-demo.appspot.com",
    messagingSenderId: "35437928940",
    appId: "1:35437928940:web:6fb326a27f28effefd20c9",
    measurementId: "G-XWY7J7EV3Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
var login = document.querySelector('.login');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // console.log(user);
        window.location = 'index.html';
    }
});        

login.addEventListener('click', (e) => {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        window.location = 'index.html'
    }).catch((error) => {
        console.log(error);
    });
})