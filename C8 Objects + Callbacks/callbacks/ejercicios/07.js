function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   stringStartWithA = (string) => {return string[0] === 'a'};
   return arrayOfStrings.filter(stringStartWithA);

}

module.exports = filter;
