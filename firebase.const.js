const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyBhBT6Giwb7wYGgeZItWwHL--VLZriXHvg",
    authDomain: "structured-erastaurant-app.firebaseapp.com",
    projectId: "structured-erastaurant-app",
    storageBucket: "structured-erastaurant-app.appspot.com",
    messagingSenderId: "168430240307",
    appId: "1:168430240307:web:bcfebf4033fd7e22f75946",
    measurementId: "G-VVH2885S0F"
};

const app = firebase.initializeApp(config);

if (!process.firebase) {
    process.firebase = app;
} else {
    console.log('Firebase connection already established!');
}

module.exports = app;