// Create the constructor function!
function Animal(name, specie){
  this.name = name,
  this.specie = specie,
  this.talk = function() {
    console.log(`Hi I´m ${this.name} and I belong to the species of ${this.specie}`)
  }
}

// Create the objects!
var dog = new Animal("chispas", "mamals");
var snake = new Animal("Nake", "reptail");

// Show in console each animal and call its metod!

console.log(dog);
console.log(snake);
dog.talk();
snake.talk();

