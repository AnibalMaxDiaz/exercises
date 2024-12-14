
function encriptar(message, key){
  code = [];
  for (let i = 0; i < message.length; i++) {
      code.push(message.charCodeAt(i) + key);
  }
  let textCifrado = String.fromCharCode(...code);
  return textCifrado;
}
console.log(encriptar('abc',1));