/*
Promesas
*/

// FUNCIONES
// function sumar(a, b) {
//     return a + b;
// }

// const resultado = sumar(4, 5);
// console.log(resultado);

// CALLBACK
// function sumar(a, b, callback) {
//     callback(a + b);
// }

// sumar(4, 5, (resultado) => {
//     console.log(resultado);
// });

// PROMESAS
function sumar(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
}

function restar(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a - b);
    });
}

function multiplicar(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a * b);
    });
}

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('No se puede dividir entre 0');
        }
        resolve(a / b);
    });
}

// sumar(2, 3).then(resultado => {
//     console.log(resultado);   

//     restar(resultado, 2).then(resultadoResta => {
//         console.log(resultadoResta);

//         multiplicar(resultadoResta, 4).then(resultadoMult => {
//             console.log(resultadoMult);
//         });
//     });
// });

// encadenamiento de promesas
// sumar(2, 3).then(resultado => {
//     console.log(resultado);
//     return restar(resultado, 2);
// }).then(resultadoResta => {
//     console.log(resultadoResta);
//     return multiplicar(resultadoResta, 4);
// }).then(resultadoMultiplicacion => {
//     console.log(resultadoMultiplicacion);
// });

// sintaxis async-await
async function inicio() {
    const resultadoSuma = await sumar(2, 3);
    const resultadoResta = await restar(resultadoSuma, 2);
    const resultadoMultiplicacion = await multiplicar(resultadoResta, 4);
    // console.log(resultadoSuma);
    // console.log(resultadoResta);
    // console.log(resultadoMultiplicacion);

    // bloque try-catch por si falla la operación de dividir
    try {
        const resultadoDivision = await dividir(resultadoMultiplicacion, 2);
        console.log(resultadoDivision);
    } 
    // el bloque del catch solamente se ejecuta cuando hay un error 
    // (la promesa ha sido rechazada)
    catch (error) {
        console.log(error);
    }
}

inicio();


// función asíncrona autoejecutable
(async() => {
    console.log('F');
})();



// sumar(4, 5, (resultado) => {
//     console.log(resultado);
// });












