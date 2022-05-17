

// mostrarClientes(clientes);
// mostrarGestores(gestores);




// gestores que nos viene del servicio web del banco
obtenerGestores((gestores) => {
    // mostrarGestores(gestores)

    // gestoresNuevos va a tener el mismo número de elementos que gestores, pero ahora todos los objetos gestor van a tener la propiedad activo a true
    // const gestoresNuevos = gestores.map(gestor => {
    //     gestor.activo = true;
    //     return gestor;
    // });

    // filtrar gestores y me quedo solamente con los que tengan id > 2
    // const gestoresNuevos = gestores.filter(gestor => {
    //     return gestor.correo > 2;
    // });

    // buscar un gestor que tenga el id igual a 3
    // const gestorEncontrado = gestores.find(gestor => {
    //     return gestor.id === 3;
    // });

    // buscar el índice del gestor que tenga el id igual a 3
    // const indiceEncontrado = gestores.findIndex(gestor => {
    //     return gestor.id === 3;
    // });

    // forEach con el índice
    gestores.forEach((gestor, i) => {
        console.log(i, gestor);
    })    


    // console.log(gestores);
    // console.log(indiceEncontrado);
    // console.log(gestorEncontrado);
    // console.log(gestoresNuevos);



});

// obtenerGestor(1, (gestor) => {
//     console.log(gestor);
// })



async function inicio() {
    const gestores = await obtenerGestores();
    const gestor = await obtenerGestorPorId(5);
}

inicio();




// console.log('Finalizado');










