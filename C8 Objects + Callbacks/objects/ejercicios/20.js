function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  // objetoUsuario.posts = [{likes: 34}, {likes: 60},...{likes: 5000}]
  var sumLikes = 0;
  objetoUsuario.posts.forEach(post => {
    sumLikes += post.likes
  });
  return sumLikes

}

module.exports = sumarLikesDeUsuario;
