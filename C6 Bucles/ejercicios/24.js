function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:

   var textoRevert = "";
   for (let i = 0; i < texto.length; i++) {
      textoRevert += texto[texto.length-1-i]
   }
   return textoRevert
}
module.exports = invertirTexto;