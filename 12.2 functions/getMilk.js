function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var howManyBottles = money/1000;
  var rest = money%1000;  
  console.log("the bottle of milk cost $1000, you can buy " + howManyBottles + " bottles");
  console.log("buy " + howManyBottles + " bottles of milk and the rest is: " + rest);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(10500);