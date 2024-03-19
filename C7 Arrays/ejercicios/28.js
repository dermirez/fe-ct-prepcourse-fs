function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  // return !!(arr.length) && typeof arr === "object"

  return Array.isArray(arr) && !!arr.length

}

module.exports = esArrayNoVacio;