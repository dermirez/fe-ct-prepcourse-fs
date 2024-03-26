function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  
  switch (objetoUsuario.email) {
    case null:
      return false
    case undefined:
      return false;
    default:
      return true
  }

}

module.exports = tieneEmail;

// var resultado = tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' });
// console.log(resultado);
