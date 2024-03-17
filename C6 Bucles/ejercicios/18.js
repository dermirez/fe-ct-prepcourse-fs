function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  // Planeación
  // P1. determinar el mayor
  // P2. asignarle el valor menor a "a y el valor mayor a "b"
  // P3. iterar desde el valor de "a", aumentanto de 1 en 1 hasta llegar a "b" 
  // P4. ir multiplicando la variable iteradora por si misma e ir guardando el valor de dicha multiplicación
  // P5. Retornar el valor de la multiplicación final

  // Ejecución

  var multiplicacion = 1;
  var mayor = Math.max(a, b);
  var menor = Math.min(a, b);

  for (let i = menor; i <= mayor; i++) { 
    multiplicacion = multiplicacion * i;
  }

  return multiplicacion === -0 ? 0 : multiplicacion; 

  /* if (multiplicacion === -0) return 0
  else return multiplicacion */

}

module.exports = productoEntreNúmeros;