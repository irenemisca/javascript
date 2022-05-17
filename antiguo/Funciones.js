/* 
FUNCIONES
*/

// function obtenerBeneficios(precioManzana, manzanasVendidas){
//     const ingresos = precioManzana * manzanasVendidas;
//     const beneficios = ingresos - 20;
//     return beneficios;
// }

// // // frutería 1
// const precioManzanaFruteria1 = 1.2;
// const manzanasVendidasFruteria1 = 40;
// const beneficiosFruteria1 =obtenerBeneficios(2, 5)
// console.log(beneficiosFruteria1);

// const ingresosFruteria1 = precioManzana * manzanasVendidas;
// const beneficiosFruteria1 = ingresosFruteria1 - 20;
// console.log(beneficiosFruteria1);

// // frutería 2
// const precioManzanaFruteria2 = 1.8;
// const manzanasVendidasFruteria2 = 20;
// const ingresosFruteria2 = precioManzanaFruteria2 * manzanasVendidasFruteria2;
// const beneficiosFruteria2 = ingresosFruteria2 - 20;
// console.log(beneficiosFruteria2);

// // frutería 3
// const precioManzanaFruteria3 = 0.8;
// const manzanasVendidasFruteria3 = 60;
// const ingresosFruteria3 = precioManzanaFruteria3 * manzanasVendidasFruteria3;
// const beneficiosFruteria3 = ingresosFruteria3 -20;
// console.log(beneficiosFruteria3);



/*
Ejercicio 1: escribir una programa con cuatro funciones: sumar, restar, multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores que solicitamos al usuario mediante la función prompt
*/

// MI EJERCICIO
// function Sumar(numero1,numero2) {
//     const total = numero1 + numero2;
//     return total;

// }

// function Restar (numero1,numero2) {
//     const total = numero1 - numero2;
//     return total;
    
// }

// function Multiplicar(numero1,numero2) {
//     const total = numero1 * numero2;
//     return total;
    
// }

// function Dividir(numero1,numero2) {
//     const total = numero1 / numero2;
//     return total;
    
// }

// const resultadosuma =Sumar(2, 5)
// console.log(resultadosuma);

// const resultadoresta =Restar(2,5)
// console.log(resultadoresta);

// const resultadomultiplicacion =Multiplicar(2,5)
// console.log(resultadomultiplicacion);

// const resultadodivision =Dividir(2,5)
// console.log(resultadodivision);

// EL EJERCICIO DEL PROFESOR


// declaración de la función
// function sumar(a, b) {
//     return a + b;
// }

// function restar(a, b) {
//     return a - b;
// }

// function multiplicar(a, b) {
//     return a * b;
// }

// function dividir(a, b) {
//     return a / b;
// } 

// const numero1 = 2;
// const numero2 = 4;


// invocación de la función
// console.log(`Suma ${sumar(numero1, numero2)}`);
// console.log(`Restar ${restar(numero1, numero2)}`);
// console.log(`Multiplicar ${multiplicar(numero1, numero2)}`);
// console.log(`Dividir ${dividir(numero1, numero2)}`);

// const resultadoSuma = sumar(5, 8);
// console.log(resultadoSuma);






// experimento fallido niñas

// function operacion(numero1,numero2) {
    
//    const suma= numero1 + numero2;
//     const resta= numero1 - numero2;
//      const multiplicar= numero1 * numero2;
//     const dividir= numero1 / numero2;
//     return suma;
// }

// let numero1;
// let numero2;
// let total;
// const obtenerresultados = operacion(2,5);
// console.log(obtenerresultados);


/*
Ejercicio 1a: escribir una programa con cuatro funciones con sintaxis de función flecha: sumar, restar, multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores que solicitamos al usuario mediante la función prompt
*/


// const sumar = (a,b) =>{
//     return a+b;
// }

// console.log(return);






// const resultado=

// const restar = (a,b) =>{
//     return a-b;
// }
// const resultado=

// const multiplicar = (a*b) =>{
//     return a+b;
// }
// const resultado=


// const dividir = (a/b) =>{
//     return a+b;
// }
// const resultado=



/*
Escribe una función llamada calcularAreaCuadrado, que reciba como parámetro el lado de un cuadrado (un número) y devuelva su área.
*/

// MIO
// const calcularAreaCuadrado = (lado) => {
//     const area= lado* lado;
//     return area;
// };

// const resultado = calcularAreaCuadrado (5)
// console.log(resultado)




// PROFESOR
// const calcularAreaCuadrado = (lado) => {
//     return lado * lado;
// };

// const area = calcularAreaCuadrado(5);



// PROFESOR RESUMIDO
// CON UN PARÁMETRO
// // const calcularAreaCuadrado = lado => lado * lado;
// // 

// // const area = calcularAreaCuadrado(5);
// // console.log(area);

// CON VARIOS PARAMETROS
// const calcularAreaCuadrado = (lado1, lado2, lad3) => lado * lado;


// const area = calcularAreaCuadrado(5);
// console.log(area);




// function sumar(a, b) {
//     console.log(callback);
//     return a + b;
// }

// const mostrar = (texto) => {
//     console.log(texto);
// };

// mostrar('casa');

// // sumar(2, 3);


// function sumar(a, b, callback) {
//     console.log(callback);
//     return a + b;
// }

// const mostrar = (texto) => {
//     console.log(texto);
// };

// sumar(2, 3, mostrar);



// function sumar(a, b, callback) {
//     callback('casa');
//     return a + b;
// }

// const mostrar = (texto) => {
//     console.log(texto);
// };

// const resultado = sumar(2, 3, mostrar);
// console.log(resultado);





// Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback quesea invocado dentro de la función con el resultado de la operación. Posteriormenteinvocar a las cuatro funciones creando una función de callback por separado y pasándoladespués por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientasde desarrollador --> Source) para comprobar cómo se ejecuta el programa





function sumar(a, b, callback) {
    callback(a + b);
}

const mostrarResultado = (resultado) => {
    console.log(resultado);
};

sumar(2, 3, mostrarResultado);




function restar(a, b, callback) {
    callback(a - b);
}

restar(2, 3, mostrarResultado);



function multiplicar(a, b, callback) {
    callback(a * b);
}

multiplicar(2, 3, mostrarResultado);


function dividir(a, b, callback) {
    callback(a / b);
}

dividir(2, 3, mostrarResultado);


// DEL PROFESOR

// function sumar(a, b, callback) {
//     callback(a + b);
// }

// function restar(a, b, callback) {
//     callback(a - b);
// }

// const mostrarResultado = (resultado) => {
//     console.log(`El resultado es ${resultado}`);
// };

// sumar(2, 3, mostrarResultado);
// restar(2, 3, mostrarResultado);

// function sumar(a, b, callback, callback2) {
//     callback(a + b);
//     callback2(a - b);
// }

// Ejercicio 4: adaptar el ejercicio anterior para integrar el callback en la invocación de lascuatro funciones, en lugar de creándola como una función de callback por separado.Utilizar la herramienta de depuración de Chrome para comprobar cómo se ejecuta elprograma.




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



