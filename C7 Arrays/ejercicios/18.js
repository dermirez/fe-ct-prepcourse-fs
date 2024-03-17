function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var suma = 0
  
  resultadosTest.forEach(element => {
    suma = suma + element 
  });

  var average = suma / resultadosTest.length
  return average

}

module.exports = promedioResultadosTest;
