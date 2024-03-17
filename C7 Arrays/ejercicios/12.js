function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var arrayUpperCase = [];
  array.forEach(element => {
    arrayUpperCase.push(element.toUpperCase());
  });
  return arrayUpperCase;

}

module.exports = convertirStringAMayusculas;
