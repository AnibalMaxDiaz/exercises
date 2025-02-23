// Drum Exercise

// index2.js is the better implementation to this exercise becouse it uses just 1 function to compare the letters of the click and the keyboard letter pressed!

//add the addeventlistener to the keydown and attach it to the event

document.addEventListener("keydown", (event)=>{
  var letter = event.key;
  console.log(letter);
  recognizeLetter(letter);
})

// add the listener to every button and attach to the unnamed function whos attached to the recognizeLetter function at the same time

var buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    console.log(this.innerHTML);
  recognizeLetter(this.innerHTML);
    
  })
  
}

//function that compares the letters to each case

function recognizeLetter(x) {
  switch (x) {
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
}