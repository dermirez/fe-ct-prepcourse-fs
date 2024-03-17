function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" ("aaaa-mm-dd") correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  /* var aYearFromNow = new Date();
  aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);  */

  /* var cumple18 = fechaNacimiento;
  cumple18.setFullYear(fechaNacimiento.getFullYear() + 18);  */

  
  
  function DOB18Calculation (fechaNacimiento) {
    var year = fechaNacimiento.getFullYear();
    var month = fechaNacimiento.getMonth();
    var day = fechaNacimiento.getDate();

    var yearBD18 = year + 18;
    
    if ((year % 4 === 0) && (month === 1) && (day === 29)) {
      var monthBD18 = 2;
      var dayBD18 = 1;
    } else {
      var monthBD18 = month;
      var dayBD18 = day;
    }

    return new Date (yearBD18, monthBD18, dayBD18, 19, 0, 0, 0);
  }

  var DOB18 = DOB18Calculation (fechaNacimiento);
  var todayDate = new Date ();

  DOB18 = DOB18.getTime();
  todayDate = todayDate.getTime();

  return (DOB18 <= todayDate)
 
}

module.exports = esMayorDeEdad;