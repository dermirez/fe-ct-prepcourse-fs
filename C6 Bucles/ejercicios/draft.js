// 


/* // M6T24.text.js
var texto = "hola pelaita";
// var newTexto = "";
var arrayTexto = texto.split("");
var arrayTextoRevert = []
// console.log(texto, arrayTexto)
for (let i = 0; i < arrayTexto.length; i++) {
  // console.log(texto[texto.length-1-i]); 
  // newTexto = newTexto + texto[i];
  // newTexto[3] = texto[0];
  arrayTextoRevert.unshift(arrayTexto[i]);
}
// return arrayTextoRevert;
//console.log(arrayTextoRevert);
var textoRevert0 = arrayTextoRevert.toString();
// console.log(textoRevert0);
var textoRevert = textoRevert0.replaceAll(",","");
console.log(textoRevert); */


/* function foo(obj1, obj2) {
  var resultado = {};
  for (var clave in obj1) {
    resultado[clave] = obj1[clave];
  }
  return resultado;
}

var resultado = foo({a:1}, {b:2});
console.log(); */

function foo(objeto) {
  var suma = 0;
  for (var clave in objeto) {
    suma += objeto[clave];
  }
  return suma;
}

var resultado = foo({a: 1, b:2, c:3})

console.log(resultado);

