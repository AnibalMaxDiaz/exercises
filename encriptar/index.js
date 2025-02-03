
function encriptar(message, key){
  code = [];
  for (let i = 0; i < message.length; i++) {
      code.push(message.charCodeAt(i) + key);
  }
  let textCifrado = String.fromCharCode(...code);
  return textCifrado;
}
console.log(encriptar('abc',1));

//Correr el codigo de abajo en los snippets del navegador, acá solo corre el de arriba por los comandos prompt!

/* function encriptar(message, key){
  code = [];
  for (let i = 0; i < message.length; i++) {
      code.push(message.charCodeAt(i) + key);
  }
  let textCifrado = String.fromCharCode(...code);
  return textCifrado;
}
const mensaje = prompt("Digita tu mensaje a cifrar: ")
console.log(encriptar(mensaje, 1));


function encriptar2(message2, key2){
  code2 = [];
  for (let i = 0; i < message2.length; i++) {
      code2.push(message2.charCodeAt(i) - key2);
  }
  let textCifrado2 = String.fromCharCode(...code2);
  return textCifrado2;
}
const mensaje2 = prompt("Digita tu mensaje a cifrar: ");
console.log(encriptar2(mensaje2, 1)); */