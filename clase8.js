/*
fetch
*/

// encadenamiento de promesas
// fetch('https://api.coincap.io/v2/assets').then((response) => {
//     console.log(response);
//     return response.text();
// }).then((data) => {
//     console.log(data);
// })

// sintaxis async-await
async function inicio() {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const data = await response.text();
    console.log(data);
}

// inicio();

/*
Clases
*/


class Gestor {

    constructor(id, usuario, correo='desconocido@mail.com') {
        // console.log('Esto es el constructor');
        this.id = id;
        this.usuario = usuario;
        this.correo = correo;
    }

    mostrarUsuario() {
        // console.log('Estoy dentro de mostrarUsuario');
        console.log(this.usuario);
    }
}


// crear objetos a partir de la clase Gestor
const gestor1 = new Gestor(1, 'Pepito');
const gestor2 = new Gestor(2, 'Ana', 'ana@gmail.com');
const gestor3 = new Gestor(3, 'Juanito', 'juanito@mail.com');

// console.log(gestor1);
// gestor1.mostrarUsuario();
// console.log(gestor1);
// console.log(gestor2);

/*
    id: 1,
    id_gestor: 3,
    usuario: "cliente3",
    correo: "cliente1@mail.com",
    saldo: 200
*/
class Cliente {
    constructor(id, id_gestor, usuario, correo, saldo) {
        this.id = id;
        this.id_gestor = id_gestor;
        this.usuario = usuario
        this.correo = correo;
        this.saldo = saldo;
    }

    mostrarIdGestor() {
        console.log(this.id_gestor);
    }
}

const cliente1 = new Cliente(1, 4, 'cliente1', 'cliente1@mail.com', 2200);
const cliente2 = new Cliente(1, 5, 'cliente1', 'cliente1@mail.com', 2200);
const cliente3 = new Cliente(1, 6, 'cliente1', 'cliente1@mail.com', 2200);
const clientes = [cliente1, cliente2, cliente3];

clientes.forEach(cliente => {
    cliente.mostrarIdGestor();
})

// console.log(cliente1.id_gestor);
