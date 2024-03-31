/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  // create the array where to store answer
  var arrayFather = [];
  // loop object keys in object "objeto" and push key as well as value in the same array.
  for (const key in objeto) {
    arrayFather.push([key, objeto[key]])
  };
  return arrayFather;

}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  const returnedObject = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    var countOfLetter = 0;
    
    for (let ii = 0; ii < string.length; ii++) {
      if (letter === string[ii]) {countOfLetter = countOfLetter + 1}
    }
    // as of now, I have the letter and count of letter
    // storing letter and countOfLetter in the object returnedObject
    if (!returnedObject.hasOwnProperty(letter)) {
      returnedObject[letter] = countOfLetter 
    }
    
  }
  return returnedObject
}




function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  // if character is in CAPITAL letter, then go to front:
  // convert the string into an array
  // reverse the array 
  // loop the reversed array
  //    if character is in capital letter, unshift the character in a temporary array
  // convert the temporary array in a string

  var arrayString = string.split("")
  var temporaryArray = [] // temporary array
  var reversedArrayString = [...arrayString].reverse();
  reversedArrayString.forEach(character => {
    if (character === character.toUpperCase()) {
      temporaryArray.unshift(character)
    } else {} 
  });
  arrayString.forEach(character => {
    if (character === character.toLowerCase()) {
      temporaryArray.push(character)
    } else {} 
  });
  return temporaryArray.join("");
}


function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  // crear varios arrays, uno con cada palabra
  // reversar el orden de las letras de cada palabra
  // unir las palabras reversadas en un nuevo string

  // arrayWords is an array where every element is a string of words e.g. ["The", "Henry", "Challenge", "is", "close!"]
  var arrayWords = frase.split(" ");
  for (let i = 0; i < arrayWords.length; i++) {
    // split the word in an array of separate letters e.g. [["T", "h", "e"], ["H", "e", "n", "r", "y"], ...]
    arrayWords[i] = arrayWords[i].split("");
    // reverse every array containing a word e.g. [["e", "h", "T"], ["y", "r", "n", "e", "H"], ...]
    arrayWords[i] = arrayWords[i].reverse();
    // join the reversed array into a string e.g. ["ehT", "yrneH", ...,"!esolc"]
    arrayWords[i] = arrayWords[i].join("")
    // put all togather into a string
    var result0 = arrayWords.join(" ")
  }
  return result0
}

/* var resultado = asAmirror("The Henry Challenge is close!");
console.log(resultado); */

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  // convert the number into a string
  var numString = numero.toString();
  // create an array of previous string
  var numStringArray = numString.split("")
  // this is an extra step just to conver strings into numbers again
  for (let i = 0; i < numStringArray.length; i++) {
    numStringArray[i] = numStringArray[i] * 1;
  }
  // lets revert the array
  var reversedArray = numStringArray.reverse();
  var reversedNumeroString = reversedArray.join("")
  var reversedNumero = reversedNumeroString * 1
  return numero === reversedNumero ? "Es capicua" : "No es capicua";
}
/* var aleluya = capicua(1221);
console.log(aleluya); */

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  // create an array from string
  var arrayString = string.split("");
  for (let i = 0; i < arrayString.length; i++) {
    
    switch (arrayString[i]) {
      case "a":
        arrayString.splice(i, 1);
        i--;
        break;
      case "b":
        arrayString.splice(i, 1);
        i--;
        break;
      case "c":
        arrayString.splice(i, 1);
        i--;
        break;
      default:
        break;
    }
    
  }
  var stringResult = arrayString.join("");
  return stringResult;
}

/* var aleluya = deleteAbc("abcdef");
console.log(aleluya); */


function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  return arrayOfStrings.sort( (a, b) => a.length - b.length)

}

/* var resultado = sortArray(["You", "are", "beautiful", "looking"])
console.log(resultado) */

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var array3 = [];
  for (let i = 0; i < array1.length; i++) {
    
    array2.includes(array1[i]) ? array3.push(array1[i]) : "";
    
  }

  return array3
}

/* var resultado = buscoInterseccion([4,2,3], [1,3,4]);
console.log(resultado); */

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
