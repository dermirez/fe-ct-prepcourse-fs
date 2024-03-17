function multiplicarArgumentos(arguments) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  
  var product;

  if (arguments === undefined) {
    product = 0;
  } else {
    product = 1;
    arguments.forEach(element => {product = product * element;});
  }
  return product

}

module.exports = multiplicarArgumentos;
