function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:  +

   if (str1.length !== str2.length) return false;
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();  
   var arrayStr1 = str1.split("");
   var arrayStr2 = str2.split("");
   // console.log(arrayStr1)
   // Planeación
   // 0. recorrer letra por letra el array1
   // 1. buscar la primera letra del array1 en el array2
   // 2. si no la encuentra, retornar false y se acaba la función
   // 3. si la encuentra: 
   // 3.1 borrar ese caracter el array2
   // 3.2 ir al paso 0.

   // Ejecución
   // 1. recorro cada letter del arrayStr1
   var index;
   var resultado;
   for (let i = 0; i < arrayStr1.length; i++) {
      index = arrayStr2.indexOf(arrayStr1[i]);
      if (index === -1) { // 2. si no la encuentra, retornar false y se acaba la función
         resultado = false;
         return resultado;
      } else {           // 3. si la encuentra: 3.1 borrar ese caracter el array2
         arrayStr2.splice(index, 1) 
      }
   }                     // 3.2 ir al paso 0.
   return true
}

// var resultado = esAnagrama("listen", "silent");
// console.log(resultado);

// console.log("str1".split(""));

module.exports = esAnagrama;
