// another way to do it!
// const array = document.querySelectorAll("button");
// for (let I = 0; I < array.length; I++) {
//   array[I].addEventListener("click", function() {
//     console.log("I got clicked!");
//   });
  
// }

//  var botones = document.querySelectorAll(".drum");
//  botones.forEach((boton)=>{boton.addEventListener("click", ()=>{
//    alert("I got clicked!");
//    })
//  })

 
//  var botones = document.querySelectorAll(".drum");
//  botones.forEach((boton)=>{boton.addEventListener("click", ()=>{
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
//   // en las funciones flecha no sirve el this
//     this.style.color = "white";
//    })
//  })

// 

// Final level: put all buttons with its respective sound!

var buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){ 
  switch(this.innerHTML) {
    case "w":
      buttons[i].style.color = "blue";      
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      buttons[i].style.color = "blue"; 
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      buttons[i].style.color = "blue"; 
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      buttons[i].style.color = "blue"; 
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      buttons[i].style.color = "blue"; 
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      buttons[i].style.color = "blue"; 
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      this.style.color = "blue"; 
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
  
    default:
      break;
  }
})}













