// Escribe un programa que simule el robo de 5 bancos. La cantidad robada en cada banco variará entre 0 y 100 millones cada vez que se robe un banco y será calculada con Math.random() * 100 

/*
En función de la cantidad robada será necesario mostrar un mensaje por pantalla:
- Entre 0 y 30 millones robados -> no se muestra nada
- Entre 30 y 60 millones robados -> Advertencia
- Entre 60 y 80 millones robados -> A la cárcel
- Entre 80 y 100 millones robados -> A LA MAZMORRA OSCURA

- Tres advertencias también te llevan a la mazmorra
- Si se acaba en la cárcel o en la mazmorra, entonces no puede seguir robando
- Si se consigue robar los 5 bancos sin acabar en la cárcel o en la mazmorra, entonces hay que mostrar por pantalla la cantidad de dinero robado en todos los bancos
*/

// ASI PODEMOS VER UNA CUENTA DEL 1 AL 4
// for( let i=0; i < 5; i++){
//     console.log(i);
// }
// HECHO POR MI

// for( let i=0; i < 5; i++){
    
//     const dinerorobado= (Math.random() * 100)

//     if (( dinerorobado> 0)&&(dinerorobado<30)) {


//         console.log('No se muestra nada');}

//     if (( dinerorobado> 30)&&(dinerorobado<60)) {


//      console.log('Advertencia');}


//      if (( dinerorobado> 60)&&(dinerorobado<80)) {
//         console.log('A la cárcel');
//         break;
//     }

//     if (( dinerorobado> 80)&&(dinerorobado<100)) {
//         console.log('A la mazmorra');
//         break;
//     }
    //console.log(` ${dinerorobado} `);
//     }

// HECHO POR EL PROFESOR

// let advertencias = 0;
// let dineroRobadoTotal = 0;
// const dineroRobadoBancos = [];

// for(let i = 0; i < 5; i++) {

//     const dineroRobado = parseInt(Math.random() * 100);
//     dineroRobadoBancos.push(dineroRobado);
//     dineroRobadoTotal += dineroRobado;

//     if ((dineroRobado >= 0) && (dineroRobado < 30)) {
//         console.log(`No se muestra nada (${dineroRobado}M€)`);
//     }

//     else if ((dineroRobado >= 30) && (dineroRobado < 60)) {
//         console.log(`Advertencia (${dineroRobado}M€)`);
//         advertencias++;
//     }

//     else if ((dineroRobado >= 60) && (dineroRobado < 80)) {
//         console.log(`A la cárcel (${dineroRobado}M€)`);
//         break;
//     }

//     else if (dineroRobado >= 80) {
//         console.log(`¡¡A LA MAZMORRA OSCURA!! (${dineroRobado}M€)`);
//         break;
//     }

//     // comprueba si he llegado al límite de las advertencias
//     if(advertencias === 3) {
//         console.log(`¡¡A LA MAZMORRA OSCURA (por advertencias)!! (${dineroRobado}M€)`);
//         break;
//     }

//     if (i === 4) {
//         console.log(`He robado los 5 bancos. Dinero robado total: ${dineroRobadoTotal}`);
//     }

// }