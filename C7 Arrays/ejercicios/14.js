function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var contar = 0;
  array.forEach(element => {
    (element > 10) ? contar = contar + 1 : "";
  });
  return contar;
}

module.exports = contarElementosMayoresA10;
