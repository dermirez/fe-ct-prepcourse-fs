function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  // 1. determinar si un elemento es par
  // 2. contar la cantidad de elementos pares que hay en el array
  // 3. retornar el cálculo del paso anterior

  var numerosPares = 0;

  numeros.forEach(num => {
    if (num % 2 === 0) {
      numerosPares ++;
    }
  });

  return numerosPares

}

module.exports = contarParesConContinue;
