// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCS2tZedRisKQFXwPNC0jQBQpgI2c4Au3o",
  authDomain: "solityid.firebaseapp.com",
  databaseURL: "https://solityid-default-rtdb.firebaseio.com",
  projectId: "solityid",
  storageBucket: "solityid.appspot.com",
  messagingSenderId: "104352057353",
  appId: "1:104352057353:web:e25f4d0c9ee5da730810d8",
  measurementId: "G-F9XDBPK1R3"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Payment Product Todo V1');
  
  function reset() {
    document.getElementById("ProductTodoListV1-Pay").reset();
  }
  
  // Listen for form submit
  document.getElementById('ProductTodoListV1-Pay').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var username = getInputVal('username');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
  
    // Save message
    saveMessage(username, email, phone);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);
  
    // Clear form
    document.getElementById('ProductTodoListV1-Pay').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(username, email, phone) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        username: username,
        email: email,
        phone: phone,
    });
  }