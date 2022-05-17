// const persona = {
//     nombre: 'Marcos',
//     edad: 23,
//     hobbies: ['ajedrez', 'baloncesto'],
//     direccion: {
//         calle: 'Castilla',
//     },
//     hablar() {
//         console.log('Hola');
//     }
// };

// console.log(persona.edad)


//En el explorador sale la  edad porque esta colocalda .edad enel console.log
//dirección  es un objeto que esta dentro de otro objeto que es persona

//Hablar no es un objeto



//Para que salga la palabra baloncesto por ejemplo porque ocupa laprimera posición en el array mientras que ajedrez ocupa la posicion 0

// console.log(persona.hobbies[1]);


//otros ejemplos:
// console.log(persona.direccion.calle);
// console.log(persona.hablar());


// para cambiar un valor de la propiedad
// persona.edad = 30;
// console.log(persona.edad);


// //Añadir una propiedad nueva
// persona.dni = '7357233572';
// console.log(persona.dni);



// persona['fecha De Nacimiento'] = '05/01/1998';
// console.log(persona['Fecha De Nacimiento']);


// //Para eliminar una propiedad
// console.log(persona.dni);
// delete(persona.dni);



// console.log(persona);

// //Para iterar un objeto
// for (const key in persona) {
//     console.log(key, persona[key]);
// }

// //convierto todo en una array donde se muestra la lista, para iterar un array
// const keys = Object.keys(persona);
// console.log(keys);






// Ejercicio 1: escribe un programa que liste el nombre de las propiedades del siguienteobjeto utilizando las dos formas comentadas con anterioridad: { name : "David Rayy",sclass : "VI", rollno : 12 }

// const persona = { name : "David Rayy",sclass : "VI", rollno : 12 };


// console.log(persona)

// Ejercicio 2: escribe un programa que declare el siguiente objeto: { x: 1, y: 2 }. Acontinuación, elimina la propiedad x y añade una propiedad nueva z con valor 5.


// const numeros =  { 
//     x: 1, 
//     y: 2 
// };

// console.log(numeros);


// // eliminar la propiedad (incluyendo el valor)

// delete(numeros.x)

// // agrega una nueva propiedad al objeto
// numeros.z = 5;

// console.log(numeros);



/*
Ejercicio 3: escribe un programa que declare dos objetos: { x: 1, y: 2, z: 3 } y { a: 1, y: 2, z: 1 }. A continuación, comprueba qué nombres de propiedades son coincidentes y cuáles son también coincidentes en valor.
*/

const objeto1 = {
    x: 1,
    y: 2,
    z: 3
};
const objeto2 = {
    a: 1,
    y: 2,
    z: 1
};

// para mostrar el valor
// for(const propiedad in objeto1) {
//     console.log(propiedad, objeto1[propiedad]);
// }

// for(const propiedad in objeto2) {
//     console.log(propiedad, objeto2[propiedad]);
// }


//¿Que pasaria si lo meto dentro uno de otro?:
// for(const propiedad in objeto1) {
//     console.log(propiedad, objeto1[propiedad]);
//     for(const propiedad in objeto2) {
//         console.log(propiedad, objeto2[propiedad]);
//     }
// }

// //EL de arriba esta mal porque tienen el mismo nombre "propiedad" y además asi nos parece las letras a comparar

// for(const propiedad1 in objeto1) {
//     // console.log(propiedad, objeto1[propiedad]);
//     for(const propiedad2 in objeto2) {
//         // console.log(propiedad, objeto2[propiedad]);
//         console.log(propiedad1, propiedad2);
//     }
// }

//Así conseguimos tener la primera parte del ejercicio
// for(const propiedad1 in objeto1) {
//     for(const propiedad2 in objeto2) {
//         // console.log(propiedad1, propiedad2);
//         if (propiedad1 === propiedad2) {
//             console.log(`Los dos objeto tienen la propiedad`);
//         }
//     }
// }



for(const propiedad1 in objeto1) {
    for(const propiedad2 in objeto2) {
        // comprueba si los nombres de las propiedades son los mismos
        if (propiedad1 === propiedad2) {
            console.log(`Los dos objetos tienen la propiedad`, propiedad2);

            // comprueba si los valores de las propiedades son los mismos
            if(objeto1[propiedad1] === objeto2[propiedad2]) {
                console.log('Los dos objetos tienen la propiedad', 
                            propiedad2,
                            '- tienen el mismo valor:',
                            objeto2[propiedad2]);
            }
        }
    }
}



// PROFESOR

// declaración de una objeto
// const persona = {
//     nombre: 'Marcos',
//     edad: 23,
//     hobbies: ['ajedrez', 'baloncesto'],
//     direccion: {
//         calle: 'Castilla',
//     },
//     hablar() {
//         console.log('Hola');
//     }
// };

// console.log(persona.nombre);
// console.log(persona.hobbies[1]);
// console.log(persona.direccion.calle);
// console.log(persona.hablar());

// // cambiar valor de la propiedad
// persona.edad = 30;
// console.log(persona.edad);

// // añadir una propiedad nueva
// persona.dni = '0845634789S';
// console.log(persona.dni);

// persona['fecha De Nacimiento'] = '05/01/1998';
// console.log(persona['fecha De Nacimiento']);

// console.log(persona.dni);
// delete(persona.dni);
// // console.log(persona.Direccion.calle);

// console.log(persona);

// // iterar un obejto
// for (const key in persona) {
//     console.log(key, persona[key]);
// }

// const keys = Object.keys(persona);


// console.log(1 / 0);
// console.log(+"a");
// console.log(parseInt("3.555345837"));
// console.log(parseFloat("3.555345837"));
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// const numero = 5.225945894545;
// console.log(+numero.toFixed(3))
// console.log(Math.round(2.3))
// console.log(Math.round(2.8))
// console.log(Math.round(2.5))
// console.log(Math.ceil(2.000004))
// console.log(Math.floor(2.99999))

// const saludo = '  cursosatb@gmail.com  ';

// console.log(saludo.length);
// console.log(saludo.indexOf('o'));
// console.log(saludo.indexOf('o', 2));
// console.log(saludo.slice(1, 3));

// const saludoNuevo = saludo.replace('ho', 'z');
// console.log(saludo);
// console.log(saludoNuevo.toUpperCase());

// const saludoNuevo = saludo.trim();
// console.log(saludo);
// console.log(saludoNuevo);

const numeros = [1, 2, 3];

// console.log(numeros.length);
// console.log(numeros[0]);
// console.log(numeros[numeros.length - 1]);
// console.log(numeros.at(-1));

// recorrer o iterar un array
for(const numero of numeros) {
    console.log(numero);
}

// insertar al final
numeros.push(20);

// insertar al principio
numeros.unshift(0)

// modificar el valor de un elemento
numeros[0] = -2;

// eliminar el último elemento
numeros.pop();

// eliminar el primer elemento
numeros.shift();

// elimina un elemento en una posición concreta
// delete(numeros[1])

// comienza en la posición 1, elimina los dos
// siguientes elementos y añade el 8 y el 9 a continuación
numeros.splice(1, 2, 8, 9);

// extraer desde la posición 1 (incluido) hacia adelante
console.log(numeros.slice(1));

// extraer desde la posición 1 (incluido) hasta la posición 3 (sin incluir)
console.log(numeros.slice(1, 3));

console.log(numeros);









