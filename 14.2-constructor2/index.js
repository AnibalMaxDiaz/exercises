// Creacion del contructor Persona!
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.talk = function(){
    console.log("...........Hello Max " + "I´m " + this.name);
  }
}

// creando objetos personas 1 y 2
var person1 = new Person("Lia", 28);
var person2 = new Person("Jane", 26);

// Otra forma de añadir metodos a un constructor!
Person.prototype.presentacion = function(){
  console.log(`Hi girls, nice to meet you ${person1.name} and ${person2.name}`);
}

// Comprobando los objetos y metodos
console.log(person1.name);
console.log(person1.age);
person1.talk();
console.log(person2.name);
console.log(person2.age);
person2.talk();
person1.presentacion();