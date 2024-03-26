function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   sumOfArrayElements = (total, num) => {return total + num};
   var sumTotal = arrayOfNumbers.reduce(sumOfArrayElements);
   cb(sumTotal);

}

module.exports = sumarArray;
