const myJSON = '{ "name":"John", "age":31, "city":"New York" }';
console.log(myJSON);

// JSON.parse convierte de string en formato JSON a objeto de JavaScript
const objeto = JSON.parse(myJSON)
console.log(objeto.name);

// JSON.stringify convierte de objeto de JavaScript a string en formato JSON
const miJSON = JSON.stringify(objeto);
console.log(miJSON);



