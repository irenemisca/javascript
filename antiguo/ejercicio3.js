/*
Crear una variable de tipo booleano que sea true, después convertimos a número, después de número string. Finalmente mostramos todas conversiones en console.log (OPERADOR UNARIO +)
*/


const bool = true;
const numero = +bool; // + es el operador unario
const string = numero.toString();

console.log(bool);
console.log(numero);
console.log(string);
