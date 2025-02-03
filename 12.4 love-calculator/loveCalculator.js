prompt("write the first name");
prompt("write the second name");
var number = Math.random();
number *= 100;
number = Math.floor(number)+1;
if (number > 70) {
  alert(`The percentage of compatibility is ${number} %, and that´s great!`);
} else {
  alert(`The percentage of compatibility is ${number} %`);
}
