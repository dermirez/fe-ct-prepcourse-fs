function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  
  const testArray = [];
  const repeatedArray = [];
  numeros.forEach(num => {
    if (testArray.includes(num)) {
      repeatedArray.push(num);
    } else {
      testArray.push(num);
    }
  });
  return repeatedArray.length === 0 ? undefined : repeatedArray[0]
  

  
  /* 
  // Create an empty object to store the result
  const objNumeros = {};
  // Loop through each element in the array
  numeros.forEach((num, index) => {
    // Check if the number is already a key in the result object
    if (objNumeros[num]) {
      // If it exists, push the current index to its array of indices
      objNumeros[num].push(index);
    } else {
      // If it doesn't exist, create a new array with the current index
      objNumeros[num] = [index];
    }
  });
  // create an array named indixes to store indixes of repeated elements
  let indixes = Object.values(objNumeros);
  // create an empty array to store indexes of duplicate values.
  var indexDuplicateNum = [];
  indixes.forEach(index => {
    if (index[1] === undefined) {
    } else {
      indexDuplicateNum.push(index[1])
    }
  });
  // create minIndexDuplicateNum variable to store min element in array resultado, minIndexDuplicateNum is the index in original array numeros where we find a duplicate value. 
  var minIndexDuplicateNum = Math.min(...indexDuplicateNum);
  var firstDuplicateNumber = numeros[minIndexDuplicateNum] // create variable to store first repited element. 
  return firstDuplicateNumber */
}

module.exports = encontrarElementoRepetido;

// var resultado = encontrarElementoRepetido([2, 3, 4, 4, 2, 1]);
// console.log(resultado);

 // Encontrar los elementos que se repiten y ordenarlos en un objeto. Los keys de dicho objeto deben ser los elementos repetidos del array numeros y los values correspondientes a cada key debe ser un array, los elementos de ese array son los índices de las posiciones en donde se encuntra ese elemento en el array numeros. 
  // ejemplo [2, 3, 3, 4, 2, 1], el obj = {2: [0, 4], 3: [1, 2], 4: [3], 1: [5]}
  // 
  // return the key whose second array element is the minimum

  