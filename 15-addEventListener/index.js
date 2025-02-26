function anotherAddEventListener("typeOfEvent", callBack){
  var eventThatHappened{
  typeOfEvent: "keyDown",
  keyPress: "k",
  timeOfPress: 2
  }
if (eventThatHappened.typeOfEvent === "keyDown") {
  callBack(eventThatHappened);
}}

// this code goes into the console
anotherAddEventListener("keyDown", function(event){
  console.log(event);