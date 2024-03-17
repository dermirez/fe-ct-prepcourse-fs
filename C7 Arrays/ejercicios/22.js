function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var arrayTableSeis = [];

  for (let i = 0; i <= 10; i++) {
    arrayTableSeis.push(i * 6);    
  }



  return arrayTableSeis;

}

module.exports = tablaDelSeis;
