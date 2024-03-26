function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:

   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]

   // recibes --> ("b", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 2, b: 40 }, { a: 1, b: 3 }, { a: 3, b: 2 }]

   // Tu código:

   return list.sort((objectA, objectB) => {
      // Code shared by chat GPT.
      if (objectA[sortBy] < objectB[sortBy]) {
          return 1;
      }
      if (objectA[sortBy] > objectB[sortBy]) {
          return -1;
      }
      return 0;
      // Alternative to previous code, just to check I understand the method. 
      // return objectB[sortBy] - objectA[sortBy];
  });
}

module.exports = sort;
