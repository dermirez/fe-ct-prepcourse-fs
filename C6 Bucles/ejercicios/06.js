function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  num = Math.abs(num);
  return 99 < num && num < 1000;
}

module.exports = tieneTresDigitos;
