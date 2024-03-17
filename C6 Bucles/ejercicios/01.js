function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:

  // 1. a === b, true
  // 2. a < 0, true
  // 3. 1. && 2., true.

  return (a === b) ? !!(a < 0) : false;



}

module.exports = esIgualYNegativo;
