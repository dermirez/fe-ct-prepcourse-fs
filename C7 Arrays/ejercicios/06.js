function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var newArray = [];
  array.forEach(element => {
    newArray.unshift(element)
  });
  return newArray
}

module.exports = invertirArray;
