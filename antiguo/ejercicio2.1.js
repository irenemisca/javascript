/*
Ejercicio 1: escribe un programa que declare tres variables de nombre a, b y c, con valores de tipo number. A continuación:

Escribe una sentencia que muestre por pantalla la suma de las tres variables utilizando console.log
Cambia el valor de la variable c.
Escribe de nuevo una sentencia que muestre por pantalla la suma de las tres variables utilizando console.log
*/

const a = 6;
const b = 2;
let c = 1;

console.log(a + b + c);
c = 10;
console.log(a + b + c);

// console.log("La suma", a, "+", b, "+", c, "es igual a ", a + b + c)
console.log(`La suma ${a} + ${b} + ${c} es igual a ${a + b + c}`);

console.log("Hello World")
console.log("2*3")

const f = 2*3;

console.log(f);

/*
Ejercicio 4: escribe un programa para pasar de grados Celsius a grados Farenheit. Pide al usuario el valor en Celsius mediante prompt y muestra los grados Farenheit en la consola. La fórmula para pasar a grados Farenheit es (C * 9 /5) + 32, donde C son los grados Celsius
*/

const gradosc = prompt('Introduzca grados celsius');
const gradosf = (gradosc * 9 /5) + 32;
console.log(`${gradosc}ºC son ${gradosf}ºF`);



// console.log(gradosCelsius);
// console.log(typeof(gradosCelsius));


