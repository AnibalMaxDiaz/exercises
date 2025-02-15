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

var botones = document.querySelectorAll(".drum");
botones.forEach((boton) => {
  boton.addEventListener("click", function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    this.style.color = "blue";
  });
});












