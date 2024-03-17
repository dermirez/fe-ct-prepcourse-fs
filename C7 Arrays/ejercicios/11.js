function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  var array2X = [];
  array.forEach(element => {
    array2X.push(element * 2);
  });
  return array2X
}

module.exports = duplicarElementos;
