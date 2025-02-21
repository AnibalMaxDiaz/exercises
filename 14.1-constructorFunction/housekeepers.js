/*var housekeeper1 = {
    name: "Mary",
    age: 20,
    experienceInMonths: 15,
    nightTime: true,
    cleaningRepetoir: ["bedroom", "bathroom", "lobby"]
}*/

// Constructor para crear housekeepers!
function Housekeeper(name, age, experienceInMonths, nightTime, cleaningRepetoir){
  this.name = name;
  this.age = age;
  this.experienceInMonths = experienceInMonths;
  this.nightTime = nightTime;
  this.cleaningRepetoir = cleaningRepetoir;

  // Acá agregamos el metodo clean al constructor!
  this.clean = function(){
    alert("Cleaning in progress!");
  }
}

// Estas instrucciones se ejecutan en los snippets del navegador para ver su desarrollo como la creacion de objetos y la ejecucion de los metodos de cada uno de ellos!
var housekeeper1 = new Housekeeper("Jane", 20, 15, true, ["bedroom", "bathroom", "lobby"]);
console.log(housekeeper1);

var housekeeper2 = new Housekeeper("Mia", 25, 29, true, ["bedroom", "bathroom"]);
console.log(housekeeper2);

var housekeeper3 = new Housekeeper("Dua", 28, 35, false, ["lobby"]);
console.log(housekeeper3);

housekeeper1.clean();
housekeeper2.clean();
housekeeper3.clean();
