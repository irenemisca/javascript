
/*
Ejercicio 1: escribe un programa que devuelva la fecha actual con espacios en blanco entre mes, día, hora, minutos, segundos y milisegundos.
*/


const fecha = new Date();

console.log(fecha.getMonth() + 1, 
            fecha.getDate(),
            fecha.getHours(),
            fecha.getSeconds(),
            fecha.getSeconds());



/*
Ejercicio 2: escribe un programa que obtenga la fecha actual. A continuación, realizar las siguientes operaciones con la fecha:

Sumar 1 día.
Sumar 1000 milisegundos.
Restar 1 año.
Restar 1 mes.
*/


const fechaActual = new Date();
const milisegundosActual = fechaActual.getTime();

const unDia = 1000 * 60 * 60 * 24;
const annio = 365 * 1000 * 60 * 60 * 24;
const mes = 30 * 1000 * 60 * 60 * 24;

const milisegundosFinal = milisegundosActual + unDia + 1000 - annio - mes;
console.log(new Date(milisegundosFinal));

