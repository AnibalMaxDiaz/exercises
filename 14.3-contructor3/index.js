function Circle(radio){
  this.radio = radio;
  this.calculateArea = function(){
    console.log(Math.PI * (Math.pow(this.radio, 2)));
  }
}
var circle1 = new Circle(5);
var circle2 = new Circle(1);
console.log(circle1);
console.log(circle2);
circle1.calculateArea();
circle2.calculateArea();