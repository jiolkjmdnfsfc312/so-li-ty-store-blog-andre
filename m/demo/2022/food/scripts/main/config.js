// ISI DENGAN PROJECT FIREBASE MILIK TEMEN-TEMEN SENDIRI
const firebaseConfig = {
  apiKey: "AIzaSyCqd2KveriPcLgXUmf6j1eT_r-ZFpyoxd4",
  authDomain: "solityid-admin-chat.firebaseapp.com",
  databaseURL: "https://solityid-admin-chat-default-rtdb.firebaseio.com",
  projectId: "solityid-admin-chat",
  storageBucket: "solityid-admin-chat.appspot.com",
  messagingSenderId: "566200163073",
  appId: "1:566200163073:web:1d2edbe64d6458d02c1900",
  measurementId: "G-7TDYFWVXHP"
};

// BIAR GA KELAMAAN PAS MAU PANGGIL NANTI
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const rdb = firebase.database();
const stg = firebase.storage();