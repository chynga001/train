// ========================================= START CODING BELOW!!
var config = {
    apiKey: "AIzaSyC9QlOZmk3D4Wt8kAVji0-BO4jsYDvwwLY",
    authDomain: "somestuff-demo.firebaseapp.com",
    databaseURL: "https://somestuff-demo.firebaseio.com",
    storageBucket: "somestuff-demo.appspot.com"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  // database.ref().on("child_added", firebaseHandler);


  var toDoCount = 0;
  // Capture Button Click
  $("#add-user").on("click", clickHandler);



  /**
 * this function is going to do listen a click event send it to firebase
 * @pararm {object} event 
 */
  function clickHandler(event) {
    event.preventDefault();

    // Capture User Inputs and store them into variables
    var name = $("#name-input").val().trim();
    // $("#name").text(name);
    var destination = $("#destination-input").val().trim();
    // $("#role").text(role);

    var time = $("#time-input").val().trim();
    // $("#date").text(date);

    var frequency = $("#frequency-input").val().trim();
    // $("#months").text(months);

  // pushing to 
    database.ref().push({
      name: name,
      destination: destination,
      time: time,
      frequency: frequency,

      
      
    });
  }



database.ref().on("child_added", function(snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties

    var name = snapshot.val().name;

    var destination = snapshot.val().destination;

    var time = snapshot.val().time;

    var frequency = snapshot.val().frequency;

  // append and print 
    var tr = $("<tr>");
    tr.append($('<td id="name">').text(name));
    tr.append($('<td id="destination">').text(destination));
    tr.append($('<td id="frequency">').text(frequency));
  //   tr.append($('<td id="time">').text(time));


    $("#tableCon").append(tr)
  });

