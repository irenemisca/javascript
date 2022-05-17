// // operadores de comparación
// console.log("2 > 2", 2 > 2); // mayor que
// console.log("2 < 1", 2 < 1); // menor que
// console.log("2 >= 2", 2 >= 2); // mayor igual que 
// console.log("2 <= 1", 2 <= 1); // mayor igual que 
// // console.log("2 == 2", 2 == "2");
// console.log("2 === 2", 2 === 2);
// console.log("2 === 2", "2" === 2);
// console.log("2 (str) === 2 (str)", "2" === "2"); // estrictamente igual que
// console.log("2 !== 2", 2 !== 2); // estrictamente distinto que

/*
CONDICIONALES
*/
// const edad = 19;

// if (edad >= 18) {
//     console.log('Soy mayor de edad');
// }
// else if(edad < 0) {
//     console.log('No he nacido');
// }
// else {
//     console.log('Soy menor de edad');
// }

// console.log('Programa terminado');


/*
Ejercicio 2: escribe un programa con cuatro variables de tipo number (a, b, c y d) y un condicional que imprima por pantalla si la suma de a y b es mayor que la suma de c y d.
*/

// const a = 2;
// const b = 2;
// const c = 1;
// const d = 1;


/*
Ejercicio 3: escribe un programa que almacene tres ángulos de un triángulo en variables de tipo entero (angulo1, angulo2 y angulo3). Crea un condicional que compruebe si esos tres ángulos juntos pueden formar un triángulo (los ángulos de un triángulo suman siempre 180 grados).
*/
// if (a + b > c + d ) {
//     console.log('La suma es mayor');
// }

// const angulo1 = 60;
// const angulo2 = 60;
// const angulo3 = 60;



// if (angulo1 + angulo2 + angulo3===180) {
//     console.log('Pueden formar un triángulo')
//     }

/*
Ejercicio 4: escribe un programa con una variable de tipo number (a) y un condicional que evalúe si el entero es par o impar utilizando el operador %
*/

// const a = 5;

// if (a % 2 === 0) {
//     console.log(`${a} es par`);
// }
// // else if (a % 2 !== 0){
// //     console.log(`${a} es impar`);
// // }
// // else if (a % 2 === 1){
// //     console.log(`${a} es impar`);
// // }
// else {
//     console.log(`${a} es impar`);
// }

/*
Ejercicio 5: escribe un programa que dado tres números imprima por pantalla cuál es el mayor.
*/
// EJEMPLO PROFESOR
// const numero1 = 3;
// const numero2 = 4;
// const numero3 = 5;

// const edad = 15;

// if ((edad >= 0) && (edad < 18)) {
//  console.log('Soy menor de edad');
// }

// const numero1 = +prompt('Introduzca número 1');
// const numero2 = +prompt('Introduzca número 2');
// const numero3 = +prompt('Introduzca número 3');

// if ((numero1>numero2)&&(numero1>numero3)) {
//     console.log('El primero es el mayor');
// }

// else if ((numero2>numero3)){
//     console.log('El segundo es el mayor');
// }

// else if (numero3>numero2){
//     console.log('El tercero es el mayor');
// } 

// else {
//     console.log('al menos dos números son iguales');
// }

// TE DICE CUAL ES EL MAYOR :

// const numeroMaximo = Math.max(numero1, numero2, numero3);
// console.log(numeroMaximo);

// operadores de incremento y decremento
// let a = 5;

//a = a + 2;
// a += 2;
// a++; // incremento de uno
// a--; // decremento

// console.log(a);

/*
Bucles
*/
// let edad = 13;

// while (edad < 17) {
//     edad++;
//     console.log(`Soy menor de edad: ${edad}`);
// }

/*
Ejercicio 8: escribe un programa que muestre todos los números desde el 1 al 50.
*/

// let numero = -1;

// while (numero < 10) {
//     numero++;
//     console.log(numero);
// }

/*
Ejercicio 9: escribe un programa que imprima toda la tabla de multiplicar del 5 (desde 0 hasta 10).
*/


// let numero = 0;

// while (numero <= 10) {
//     const resultado = numero * 5;
//     console.log(`5 x ${numero} = ${resultado}`);
//     numero++;

    // console.log(`5 x ${numero} = ${numero*5}`);
// }

// console.log("Programa terminado");
// console.log(numero);

/*
Escribe un programa con dos variables: litrosAceiteEnGarrafa con valor a 10 y litrosAceiteEnBocadillo con valor 0 . Haz un bucle while, de tal forma que en cada iteración se incremente en 1 el valor de la variable  litrosAceiteEnbocadillo y decremente en 1 valor el valor de la variable  litrosAceiteEnGarrafa. La variable  litrosAceiteEnbocadillo  debería quedar con un valor de 3. Por último, muestra con un console.log el valor de las variables  litrosAceiteEnGarrafa  y  litrosAceiteEnbocadillo  
*/

// let litrosAceiteEnGarrafa = 10
// let litrosAceiteEnBocadillo = 0

// while (litrosAceiteEnBocadillo < 3) {
//     litrosAceiteEnBocadillo++;
//     litrosAceiteEnGarrafa--;
//     console.log(litrosAceiteEnBocadillo, litrosAceiteEnGarrafa);
// }


// console.log(`Litros en Garrafa(primer bocadillo): ${litrosAceiteEnGarrafa}`);
// console.log(`Litros en bocadillo: ${litrosAceiteEnBocadillo}`);

// let litrosAceiteEnBocadillo2 = 0;

// while (litrosAceiteEnBocadillo2 < 8) {
//     litrosAceiteEnBocadillo2++;
//     litrosAceiteEnGarrafa--;
//     console.log(litrosAceiteEnBocadillo2, litrosAceiteEnGarrafa);

//       // ya no tengo más aceite
//       if (litrosAceiteEnGarrafa === 0) {
//         break;
//     }

// }

// console.log(`Litros en garrafa (primer bocadillo): ${litrosAceiteEnGarrafa}`);
// console.log(`Litros en primer bocadillo: ${litrosAceiteEnBocadillo}`);

// for (let i = 0 ; i < 5; i++){
//     console.log(i);
// }



/*
Ejercicio 10: escribe un programa que pida al usuario una palabra (mediante la función prompt) y lo muestre por pantalla 10 veces.
*/

// const palabra = prompt('Introduzca palabra');

// for (let i = 1; i <= 10; i++) {
//     console.log(palabra);
// }

/*
Ejercicio 9: escribe un programa que imprima todas las tablas de multiplicar (desde 1 al 10).

*/



// for (let j = 1; j <= 10; j++) {

//     console.log(`Tabla del ${j}`)
//     for (let i = 0; i <= 10; i++) {
//         console.log(`${j} x ${i} = ${i*j}`);
//     }
// }

// la J antes era un ocho por ejemplo y lo cambié a J para que aparecieran los numero del uno al 10
// console.log(`Tabla del ${j}`) -- Esto es para que salga la palabra tabla antes de cada una y el simbolo del dolar es para que se repitan los numeros en consecuencia

/*
Ejercicio 11: escribe un programa que pida al usuario un número entero positivo (mediante la función prompt) y muestre por pantalla la cuenta atrás desde ese número hasta cero, utilizando comas como separación.
*/
// let texto='';
// let usuario = prompt('Introduzca un número entero positivo');

// for ( i = usuario; i >= 0; i--) {
//     texto+= `${i},`
// }

// console.log(texto);

// OTRA FORMA IGUAL DE HACERLO

// const numero = 3;

// let texto = '';
// for (let i = numero; i >= 0; i--) {
//     texto += i + ",";
// }


// concadenación
// let abecedario = "a";
// abecedario = abecedario + "b";
// abecedario += "c";
// console.log(abecedario);

// Array
// const numeros = [1,2,3];


// PARA AÑADIR UN NUMERO A LA ARRAY O VARIOS
// numeros.push(4, 5, 6);

// console.log(numeros);
// const numeroMaximo = Math.max(...numeros)
// console.log(nu);

// // numeros.



