// // Create the function to choise an img´s name.
// let count = 0;
// if (count === 0) {
//   document.querySelector(".img1").setAttribute("src", `./images/dice6.png`);
//   document.querySelector(".img2").setAttribute("src", `./images/dice6.png`);
//   count++
//   console.log(count);
// } else {
//   count++;
// }
//function getName() {
  var numero = Math.floor((Math.random()*6)+1);
  var newImage1 = "dice" + numero + ".png"; 
  var numero2 = Math.floor((Math.random()*6)+1);
  newImage2 = "dice" + numero2 + ".png"
  //count++
 // return(newImage);
//}
//let rName1 = getName();
//let rName2 = getName();

//console.log(rName1 + " success");
//console.log(rName2 + " success");

//Load the choissen images.
document.querySelector(".img1").setAttribute("src", `./images/${newImage1}`);
document.querySelector(".img2").setAttribute("src", `./images/${newImage2}`);

// Determine wich player won!
if (numero > numero2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(numero === numero2){
  document.querySelector("h1").innerHTML = "Draw!";
}else{
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}