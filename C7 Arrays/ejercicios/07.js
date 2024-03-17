function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  

  if (typeof(array[0] === 'string')) {
    return array.sort()
  } else {
    array.sort(function(a, b){return a - b});
    return array
  }

}

module.exports = ordenarArray;
