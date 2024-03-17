function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:

  // 1. num % 3 === 0 && num % 5 === 0, fizzbuzz
  // 2. num % 3 === 0, fizz 
  // 3. num % 5 === 0, buzz
  // 4. default false

  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } 
  if (num % 3 === 0) {
    return "fizz";
  } 
  if (num % 5 === 0) {
    return "buzz";
  } else {
    return false;
  }

}

module.exports = fizzBuzz;
