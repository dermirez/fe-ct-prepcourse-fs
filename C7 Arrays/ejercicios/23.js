function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  // 1. built your new array satisfying the required condition for each element.
  // 2. if interaction number (new array element index +1) is equal to element value in pisition i, return string.

  var newArray = [];
  for (let i = 1; i <= 10; i++) {
    newArray.push(num + i * 2)    
  }

  for (let i = 0; i < newArray.length; i++) {
    if (i+1 === newArray[i] ) {
      return "Se interrumpió la ejecución"
    }
    
  }

  return newArray
}

module.exports = breakStatement;
