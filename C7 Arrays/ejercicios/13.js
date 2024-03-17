function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var arrayPares = [];

  array.forEach(element => {
    (element % 2 === 0) ? arrayPares.push(element) : "";
  });

  return arrayPares

}

module.exports = filtrarNumerosPares;
