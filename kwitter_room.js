var firebaseConfig = {
      apiKey: "AIzaSyBJ6YKJwYjK5SgWyzOxJMCf1xGoj3oQvNk",
      authDomain: "kwitter-40f3e.firebaseapp.com",
      projectId: "kwitter-40f3e",
      storageBucket: "kwitter-40f3e.appspot.com",
      messagingSenderId: "947408112675",
      appId: "1:947408112675:web:ff5a8a976926f5c114f596"
    };
    
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
