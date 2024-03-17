function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  
  // Solution:
  // 1. find the greatest number within the array
  // 2. return its position

  // Tu código:

  let maxNumber = array[0];
  let maxNumberPosition = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
        maxNumber = array[i];
        maxNumberPosition = i;
    }
  }

  return maxNumberPosition;
}

module.exports = encontrarIndiceMayor;
