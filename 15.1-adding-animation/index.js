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
  // this es la entidad que se asocia a el evento addEventListener
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){ 
  switch(this.innerHTML) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
  
    default:
      break;
  }
})};

// Adding the addeventlistener for the keyboard!
document.addEventListener("keydown", function(event){ //Se añade el addeventlistener a todo el documento - event es el parametro por defecto que se usa para atar el escuchador de eventos a el    -keydown es el escuchador del teclado se usa igual que el click.
// alert("Key pressed!");
console.log(event);
console.log(event.key);

switch(event.key) {
  case "w":
    var crash = new Audio("./sounds/crash.mp3");
    crash.play();
    break;
  case "a":
    var kick = new Audio("./sounds/kick-bass.mp3");
    kick.play();
    break;
  case "s":
    var snare = new Audio("./sounds/snare.mp3");
    snare.play();
    break;
  case "d":
    var tom1 = new Audio("./sounds/tom-1.mp3");
    tom1.play();
    break;
  case "j":
    var tom2 = new Audio("./sounds/tom-2.mp3");
    tom2.play();
    break;
  case "k":
    var tom3 = new Audio("./sounds/tom-3.mp3");
    tom3.play();
    break;
  case "l":
    var tom4 = new Audio("./sounds/tom-4.mp3");
    tom4.play();
    break;

  default:
    break;
}

})













