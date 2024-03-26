const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  // Solution #1
  /* var countOfPropeties = 0;
  for (const key in objeto) {
    countOfPropeties ++;
  }
  return countOfPropeties; */

  // Solution #2
  // Create an array with the list of properties of given object
  var properties = Object.keys(objeto);
  // Quantity of properties is equivalent to the length of array properties
  var amountOfProperties = properties.length
  // return the result
  return amountOfProperties;
};

module.exports = contarPropiedades;
