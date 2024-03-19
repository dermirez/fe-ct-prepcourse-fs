function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  // comparar cada elemento del array numeros con el numero entero que deberia ir en esa posicion
  // si son diferentes el que es y el que deberia ser, retornar el que deberia ser
  // el array es vacio o si no hay numeros faltantes, retornar null
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] !== numeros[0] + i) {
      return numeros[0] + i;
    }
  }
  return null
  

}


module.exports = encontrarNumeroFaltante;

