function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:

  // 1. is even ?
  // 2. is divisible by 3 ?
  // 3. 1 && 2 

  return a % 2 === 0 && a % 3 === 0
}

module.exports = esParYDivisiblePorTres;