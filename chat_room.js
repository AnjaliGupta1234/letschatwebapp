var firebaseConfig = {
    apiKey: "AIzaSyBMa7JteMvEHk0xyPV42dXiTq0lIG0Aorc",
    authDomain: "kwitter-c958f.firebaseapp.com",
    databaseURL: "https://kwitter-c958f-default-rtdb.firebaseio.com",
    projectId: "kwitter-c958f",
    storageBucket: "kwitter-c958f.appspot.com",
    messagingSenderId: "444156638979",
    appId: "1:444156638979:web:f7a947d384267a896adb36",
    measurementId: "G-Q9VSY2JW84"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
