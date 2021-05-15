
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyD0DLUQaNQy2yBPrgUFHpOEJYmXCdE4fk0",
      authDomain: "kwitter-648ae.firebaseapp.com",
      databaseURL: "https://kwitter-648ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-648ae",
      storageBucket: "kwitter-648ae.appspot.com",
      messagingSenderId: "177269383189",
      appId: "1:177269383189:web:185f2eaf973744b93c6e1c",
      measurementId: "G-WBNVJDL6RK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room_name"});
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location =  "kwitter_page.html" ;


}

