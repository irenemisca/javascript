
// console.log('Comienzo del programa');


// setTimeout(() => {
//     console.log('Estoy dentro del setTimeout');
// }, 3000);


// console.log('Final del programa');





// PARA QUE REPITA

// console.log('Comienzo del programa');

// let i = 0;
// const setInterval(() => {
//     i++;
//     console.log(`Estoy dentro del setInterval: ${i}`);
// }, 3000);


// console.log('Final del programa');




// VAMOS A PARAR EL TEMPORIZADOR CUANDO LLEVE 30 SEGUNDOS 

// console.log('Comienzo del programa');

// let i = 0;
// const id = setInterval(() => {
//     i++;
//     console.log(`Estoy dentro del setInterval: ${i}`);
// }, 3000);

// setTimeout(() => {
//     clearInterval(id);
// }, 30000);


// console.log('Final del programa');



// MI EJERCICIO 4
// function sumar(a, b, callback) {
//     callback(a + b);
// }

// function restar(a, b, callback) {
//     callback(a - b);
// }

// const multiplicar = (a, b, callback) => callback(a * b);
// const dividir = (a, b, callback) => callback(a / b);

// sumar(2, 3, (resultado) => {
//     console.log(`El resultado de la suma es ${resultado}`);
// });
// restar(2, 3, (resultado) => {
//     console.log(`El resultado de la resta es ${resultado}`);
// });
// multiplicar(2, 3, (resultado) => {
//     console.log(`El resultado de la multiplicación es ${resultado}`);
// });
// dividir(2, 3, (resultado) => {
//     console.log(`El resultado de la divisón es ${resultado}`);
// });


// EL DEL PROFESOR MAS RESUMIDO

// const sumar = (a, b, callback) => callback(a + b);
// const restar = (a, b, callback) => callback(a - b);
// // const multiplicar = (a, b, callback) => callback(a * b);
// // const dividir = (a, b, callback) => callback(a / b);



//NOSE QUE ES ESTO
// // EL EJERCICIO 5

// function sumar(a, b, callback) {
//     callback(a + b);
// }

// function restar(a, b, callback) {
//     callback(a - b);
// }

// const multiplicar = (a, b, callback) => callback(a * b);
// const dividir = (a, b, callback) => callback(a / b);

// setTimeout(() => {
//     sumar(2, 3, (resultado) => {
//         console.log(`El resultado de la suma es ${resultado}`);
//     });
    
// }, 1000);



// setTimeout(() => {

// restar(2, 3, (resultado) => {
//     console.log(`El resultado de la resta es ${resultado}`);
// });

// }, 2000);

// setTimeout(() => {

// multiplicar(2, 3, (resultado) => {
//     console.log(`El resultado de la multiplicación es ${resultado}`);
// });
// }, 3000);

// setTimeout(() => {

// dividir(2, 3, (resultado) => {
//     console.log(`El resultado de la divisón es ${resultado}`);
// });
// }, 4000);




/*
Ejercicio 5: adaptar las cinco funciones del Ejercicio 4 para que las cuatro funciones invoquen el callback una vez han transcurrido 1 segundo (para la función sumar), 2 segundos (para la función restar), 3 segundos (para la función multiplicar) y 4 segundos para dividir (para la función dividir). Añadir un console.log en la última línea del código del programa. Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta el programa.
*/

const sumar = (a, b, callback) => callback(a + b);
const restar = (a, b, callback) => callback(a - b);
const multiplicar = (a, b, callback) => callback(a * b);
const dividir = (a, b, callback) => callback(a / b);

// SUMA
setTimeout(() => {
    sumar(1, 2, (resultado) => {
        console.log(resultado);
    });
}, 1000);

// RESTA

setTimeout(() => {
    restar(2, 4, (resultado) => {
        console.log(resultado);
    })
}, 2000);


//MULTIPLICACION
setTimeout(() => {
    multiplicar(2, 4, (resultado) => {
        console.log(resultado);
    })
}, 3000);

//DIVISION
setTimeout(() => {
    dividir(2, 4, (resultado) => {
        console.log(resultado);
    })
}, 4000);

// setTimeout(() => {
    
// }, 1000);

// sumar(2, 3, (resultado) => {
//     console.log(`El resultado de la suma es ${resultado}`);
// });
// restar(2, 3, (resultado) => {
//     console.log(`El resultado de la resta es ${resultado}`);
// });
// multiplicar(2, 3, (resultado) => {
//     console.log(`El resultado de la multiplicación es ${resultado}`);
// });
// dividir(2, 3, (resultado) => {
//     console.log(`El resultado de la divisón es ${resultado}`);
// });