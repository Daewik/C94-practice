var firebaseConfig = {
    apiKey: "AIzaSyApsk4BNe92D2tzm0m7vEVWeHvnl5K6xcc",
    authDomain: "test-26861.firebaseapp.com",
    databaseURL: "https://test-26861-default-rtdb.firebaseio.com",
    projectId: "test-26861",
    storageBucket: "test-26861.appspot.com",
    messagingSenderId: "905909724965",
    appId: "1:905909724965:web:e8732fce28ae1ae7c25ccc",
    measurementId: "G-2JWNXKM4W7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


function addUser()
{
    var name= document.getElementById("user_input").value;
    firebase.database().ref("/").child(name).update({
        user_name : name,
        age : "12",
        gender : "Male",
        school : "DPS Rohini"
        })
}