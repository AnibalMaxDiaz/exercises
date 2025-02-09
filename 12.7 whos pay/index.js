var names = ["Gindo", "Anibal", "David"];
function whoPay(names) {
  var numberOfPeople = names.length;
  var randomNumber = Math.floor(Math.random()*numberOfPeople);
  var inviteFor = names[randomNumber];
  return inviteFor + " is going to buy lunch today!"
}
whoPay(names);
