

/*
fechas
*/

// crea un objeto de tipo fecha actual
const fechaActual = new Date();

// crea un objeto de tipo fecha para una fecha en particular
const fecha11S = new Date(2001, 8, 11, 15, 0);

const fecha2 = new Date(1000213200000);

// formato UNIX
console.log(fecha11S.getTime()); // 1000213200000
console.log(fechaActual.getTime()); // 1650461770395

console.log(fechaActual.getFullYear()); // 2022
// console.log(fechaActual.getYear());     // 122
console.log(fechaActual.getMonth());    // 3 (0-11)
console.log(fechaActual.getDay());  // 3 (día de la semana)
console.log(fechaActual.getDate()); // 20
console.log(fechaActual.getHours()); // 20
console.log(fechaActual.getMinutes()); // 15
console.log(fechaActual.getSeconds()); // 36
console.log(fechaActual.toLocaleString());
console.log(fechaActual.toISOString());

const mes = fechaActual.getMonth();
console.log(`El mes es ${mes}`);
fechaActual.setMonth(12);
const mesNuevo = fechaActual.getMonth();
console.log(`El mes es ${mesNuevo}`);






