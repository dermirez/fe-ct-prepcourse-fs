function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  /* var newArray = array.map( (month) => {
    
  } ) */
  
  var existeEnero = array.includes('Enero');
  var existeMarzo = array.includes('Marzo');
  var existeNoviembre = array.includes('Noviembre');

  if (existeEnero === false || existeMarzo === false || existeNoviembre === false) {
    return "No se encontraron los meses pedidos";
  }

  var newArray = [];

  for (let i = 0; i < array.length; i++) {
    
    switch (array[i]) {
      case "Enero":
        newArray.push(array[i]);
        break;
      
      case "Marzo":
        newArray.push(array[i]);
        break;
    
      case "Noviembre":
        newArray.push(array[i]);
        break;

      default:
        break;
    }
  
  }

  return newArray;

}

module.exports = mesesDelAño;
