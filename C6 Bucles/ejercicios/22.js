function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"

   var length = Math.max(str1.length, str2.length, str3.length);
   var resultado = "";
   for (let i = 0; i < length; i++) {
      resultado = resultado + str1[i] + str2[i] + str3[i];
   };
   return resultado
}

module.exports = combine;
