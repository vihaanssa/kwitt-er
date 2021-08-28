  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBXIfd6A_Tdl7jiD08mE7cwsCNsuGHP1rg",
      authDomain: "kwitter-cdcc1.firebaseapp.com",
      databaseURL: "https://kwitter-cdcc1-default-rtdb.firebaseio.com",
      projectId: "kwitter-cdcc1",
      storageBucket: "kwitter-cdcc1.appspot.com",
      messagingSenderId: "1062876566467",
      appId: "1:1062876566467:web:48324fbcf85d7c0a9f6376",
      measurementId: "G-P14201J18F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name+"!";
    function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"hey this is vihaan here"
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room name-"+Room_names);
     row="<div class='room_name'id="+ Room_names+"onclick='r(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function r(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}