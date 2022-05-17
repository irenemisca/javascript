// console.log("Hola mundo");
// console.log("Adiós");
// console.log("5.4");

// crea una variable no va a ser modificada de valor
const a = 5;

// no se puede cambiar el valor de una variable declarad como const
// a = 1;

let b = 8;
b = 10.3;

// no se puede declarar la variable dos veces con el mismo nombre
// let a = 5;

// declara una variable pero no le asigna valor (let)
let c;
// console.log(c); // undefined
c = 5;

// error porque const exige que se le asigne un valor
// const d;




// console.log(b);

// comentario de una única línea
// console.log(5.4); alsdkfjaslñdfjalñsdkfjalñskdfj

/*
Comentario multilínea
*/

// tipo de dato número
const numeroA = 5;
const numeroB = 5.4;
const numeroC = 3.2e2; //32

// tipo de dato string
const string1 = "casa";
const string2 = "";
const string3 = "5";

//console.log(string1.length);
//console.log(string2.length);
//console.log(string3.length);

// tipo de dato booleano
const bool1 = true;
const bool2 = false;

// tipo de array = lista de elementos ordenados
const array1 = [5, 2, bool2, "ab"];
//console.log(array1);
//console.log(array1.length);

//tipo objetos = lista de elementos desordenados
const object = {
    numero: 5,
    bool: true,
    string: "ac"
};

// console.log(objeto);

/*
Conversión de tipos
*/

// de string a número
const string = "5.5";
const numero = parseInt(string);    // toma solo parte entera (5)
const numeroFloat = parseFloat(string); // toma la parte entera y decimal (5.1)
const otroNumero = +string

// console.log(numero);
// console.log(numeroFloat);
// console.log(otroNumero);

// de número a string
const string4 = otroNumero.toString();
// console.log(string4);

// de booleano a string
const bool3 = true;
const string5 = bool3.toString();
// console.log(bool3);
// console.log(string5);

// de booleano a número
const bool4 = false;
const numero1 = +bool4;
// console.log(numero1);

// de cualquier dato a booleano
// console.log(0, Boolean(0));
// console.log(1, Boolean(1));
// console.log(2394, Boolean(2394));
// console.log("ab", Boolean("ab"));
// console.log([], Boolean([]))
// console.log({}, Boolean({}));
// console.log(undefined, Boolean(undefined));
// console.log(null, Boolean(null));
// console.log(NaN, Boolean(NaN));

// typeof: conocer el tipo de un valor
// console.log(0, typeof(0));
// console.log("ab", typeof("ab"));
// console.log(true, typeof(true));
// console.log({}, typeof({}));
// console.log([], typeof([]));

//operaciones matemáticas
// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 / 3);
// console.log(3 % 2);

// concatenación
console.log(2 + "3");
console.log("2" + 3);
console.log("2" + "3");
