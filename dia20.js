//     //Para iterar (que es recorrer todos los elementos)

// //     for(let i=0; i<=2; i++) {
// //     console.log();
// // }


// // // El mismo ejercicio que arriba pero más avanzado, solo objetos y array

// // for(let i=0; i<propiedades.length; i++) {
// //     console.log(i, propiedades[i]);
// // }

// //Ahora para que se muestre el valor


// for(let i=0; i<propiedades.length; i++) {
//     console.log(i, propiedades[i], gestor[propiedades[i]]);
// }


//Cosas sin sentido

// console.log(1 / 0);
// console.log(+"a");
// console.log(parseInt("3.555345837"));
// console.log(parseFloat("3.555345837"));
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// const numero = 5.225945894545;
// // console.log(+numero.toFixed(3))
// // console.log(Math.round(2.3))
// // console.log(Math.round(2.8))
// // console.log(Math.round(2.5))
// console.log(Math.ceil(2.000004))
// console.log(Math.floor(2.99999))





// //Esto te da la longitud en numeros de cuantas letras hay
// const saludo = 'aklsjdfhaklsdfhaskldjfhlasdjkf';

// console.log(saludo.length);




// //Para buscar

// const saludo = 'hola';
// console.log(saludo.indexOf('o'));

//Que busque a partir de una posición por ejemplo la 2
// const saludo = 'hola';
// console.log(saludo.indexOf('o', 2));

//Para incluir lo que yo quiera
// const saludo = 'hola';
// console.log(saludo.slice(1, 4))


//Carácteres a reemplazar
// const saludoNuevo = saludo.replace('h', 'z');
// console.log(saludo);
// console.log(saludoNuevo.toUpperCase());

//TExto sin espacios

// const saludo = '  cursosatb@gmail.com  ';

// const saludoNuevo = saludo.trim();
// console.log(saludo);
// console.log(saludoNuevo);




// Ejercicio 1: escribe un programa que dado dos string compruebe si los dos primeroscaracteres son iguales.

// const str1 = 'hola';
// const str2 = 'hola a todo el mundo';

// console.log(str1[0]);
// console.log(str2[0]);



/*
Ejercicio 3: escribe un programa que compruebe que el substring "abc" existe en un string dado, pero no puede encontrarse ni al comienzo, ni al final.
*/



// const str = 'abchola'; // no
// const str = 'holaabc'; // no
// const str = 'holaabchola'; // sí
// const str = 'hola'; // no

//El prompt es cuando se que todo esta bien
// const str= prompt('Introduzca palabra')


// const posicion = str.indexOf('abc');

// if(posicion === -1) {
//     console.log('No se encuentra');
// }


// else if (str.startsWith('abc')) {
//     // else if(posicion === 0) {
//         console.log('Está al principio');
//     }


// else if(str.endsWith('abc')) {
//     // else if((str.length - str.indexOf('abc')) === 3) {
//         console.log('Está al final');
//     }




// // está abc y no está ni al principio ni al final
// else {
//     console.log('Está en el medio');
// }




/*
Ejercicio 4: escribe un programa que dado un string y una determinado posición, compruebe que el carácter anterior y el posterior son iguales o no.
*/

const str = 'holahala';
const posicion = 3;

// console.log(str[posicion+1]);

if(str[posicion-1] === str[posicion+1]) {
    console.log('Son iguales');
} 
else {
    console.log('No son iguales');
}
// if(str[]) {

// }

// si pongo posicion -1 sera la a y si pongo +1 sera la a tambien porque cuatro mas uno es 5 