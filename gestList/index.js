var getList = ["Angela", "Anibal", "David", "Margarita", "Isabel", "Natalia"];
var gest = prompt("write the gest´s name");
if (getList.includes(gest)) {
  alert("Welcome " + gest);
} else {
  alert("Sorry " + gest + " maybe next time.")
}