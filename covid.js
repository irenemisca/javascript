
// function ajax(opciones, callback) {

//     // crea el objeto XMLHttpRequest
//     const xhttp = new XMLHttpRequest();

//     // establece una función a invocar cuando el atributo readyState cambia
//     xhttp.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status == 200) {
//             callback(this.responseText);
//         }
//     };

//     // establece la configuración de la petición (tipo, url y asincronismo)
//     xhttp.open(opciones.method, opciones.url, true);

//     // envía la petición al servidor
//     xhttp.send('{}');
// }

// ajax({
//     url: 'https://api.covid19api.com/dayone/country/spain/status/confirmed',
//     method: 'GET'
// }, (datos) => {

//     // dias es un array de objetos
//     const dias = JSON.parse(datos);

//     // itero o recorro el array de dias
//     for (let i = 1; i < dias.length; i++) {
//         const diaActual = dias[i];
//         const diaAnterior = dias[i-1];
//         console.log(diaActual.Cases - diaAnterior.Cases);
//     }


//     // console.log(dias);
    
//     // for (let index = 0; index < array.length; index++) {
//     //     const element = array[index];
//     // }



//     // for(const dia of dias) {
//     //     console.log(dia.Cases, dia.Date, dia.Country);
//     // }
// });


// ajax({
//     url: 'https://api.covid19api.com/countries',
//     method: 'GET'
// })











/*
Mostrar por pantalla el número de casos no acumulativos por día para España 

Mostrar por pantalla todos los países disponibles para la descarga de datos
*/









function ajax(opciones, callback) {

    // crea el objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    // establece una función a invocar cuando el atributo readyState cambia
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            callback(xhttp.responseText);
        }
    };

    // establece la configuración de la petición (tipo, url y asincronismo)
    xhttp.open(opciones.method, opciones.url, true);

    // envía la petición al servidor
    xhttp.send();
}

ajax({
    url: 'https://api.covid19api.com/dayone/country/spain/status/confirmed',
    method: 'GET'
}, (datos) => {

    // dias es un array de objetos
    const dias = JSON.parse(datos);

    // itero o recorro el array de dias
    // console.log(dias[0].Cases, dias[0].Date)
    for (let i = 1; i < dias.length; i++) {
        const diaActual = dias[i];
        const diaAnterior = dias[i-1];
        const casosDia = diaActual.Cases - diaAnterior.Cases;
        // console.log(casosDia, diaActual.Date);
    }
});

ajax({
    url: 'https://api.covid19api.com/countries',
    method: 'GET'
}, (datosString) => {

    // paises es un array de objetos
    const paises = JSON.parse(datosString);

    // iterar el array de paises
    for(const pais of paises) {
        console.log(pais);
    }
})





