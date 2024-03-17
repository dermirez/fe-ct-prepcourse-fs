function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  // return numero === Math.round(numero) /* solution 1 works */
  // return Number.isInteger(numero) /* solution 2 works */
  return Number.isInteger(numero)
}

module.exports = esNumeroEntero;