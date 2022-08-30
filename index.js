// JavaScript para React

// Funciones

// function hello() {
//     console.log('Hola mundo');
// }

// hello(); // Las funciones permiten reutilizar lógica

// function hello2() {
//     return {nam: "oscar"};
// }
// console.log(hello2());

// // Una función puede retornar otra función

// function hello3() {
//     return function () {
//         return 'hola';
//     };
// }

// Estos son los principios de programación funcional

// console.log(hello3()()); // Se puede volver a ejecutar esa función con otro par de parentesis

// -----------------------------------------------------------------------------------------------------

// Parametros de funciones
// Los parametros son valores que nuestra función puede esperar para procesarlo

// function hello(name) {
//     return 'Hola ' + name;
// }

// console.log(hello('Oscar'));
// console.log(hello('Jesus'));
// console.log(hello('Maria'));

// function add(x, y) {
//     return x + y;
// }

// console.log(add(10, 20));
// console.log(add(4, 5));
// console.log(add(10, 7));


// -------------------------------------------------------------------------------------------------

// Parametros default

// function add(x = 10, y = 0) { // Forma sencilla, y tiene valor por defecto de 0
//     // Forma a mano
//     if (y == undefined) {
//         y = 0;
//     }


//     return x + y;
// }

// console.log(add(20, 30)); // Por si olvidamos uno, debemos poner un parametro default pora evitar el NaN

// --------------------------------------------------------------------------------------------------

// Objetos
// Se representan con llaves y pueden ser guardados en variables o en constantes
// const user = {
//     // los que son pares de clave y valor se conocen como properties
//     name: 'Oscar',
//     lastname: 'Bucio',
//     age: 21,
//     addres: { // En un objeto se pueden colocar más objetos
//         country: 'Mexico',
//         city: 'Cuautitlan Izcalli',
//         street: 'Olmo',
//     },
//     friends: ['David', 'Alejandro', 'Diego', 'Luis', 'Max', 'Said'],
//     active: true,
//     // Se le pueden asignar funciones
//     sendEmail: function () {
//         return 'Sending email...'
//     },
//     // Nueva forma de función en objetos
//     // Metodos
//     sendMail() {
//         console.log("Sending mail");
//     }
// }

// console.log(user.sendEmail()); 

// Existen dos formas de acceder notación de punto y notación de corchetes


// -----------------------------------------------------------------------------------------------------

// Shorthand property names
// Creación de objetos a través de otros datos

// const name = 'Laptop';
// const price = 3000;

// // Forma larga
// const newProduct = {
//     name: name,
//     price: price,
// }

// console.log(newProduct);

// Forma mejor
// const newProduct2 = {
//     name,
//     price
// }
// console.log(newProduct);

// Es lo mismo que colocar name: name y price: price

// --------------------------------------------------------------------------------------------------------

// Manipulación del DOM
// Generar la interfaz con JS

// document es todo el documento, es un objeto
// Document es un objeto del objeto Window, que hasta ahora no sé si es 'el' objeto global. Pero hasta ahí sabemos jaja

// const title = document.createElement('h1') // Permite crear elementos de HTML
// // ctrl + espacio => autocompletado de todas las etiquetas que se pueden crear
// title.innerText = 'Hola mundo desde JavaScript';

// const button = document.createElement('button');
// button.innerText = 'click';
// // Event handlers
// button.addEventListener('click', function () {
//     title.innerText = 'Texto actualizado con JS';
//     alert('Se realizó un click')
// })

// document.body.append(title); // Añadir al body
// document.body.append(button);


// ---------------------------------------------------------------------------------------------------------------

// Objetos como parametro
// const user = {
//     name: 'Joe', 
//     age: 30
// }

// function printInfo(user) { 
//     return '<h1>Hola ' + user.name + '<h1/>';
// }

// Mostrar en el DOM
// document.body.innerHTML = printInfo(user) // Espera un string en formato HTML

// ----------------------------------------------------------------------------------------------------------------

// Destructuring 
// const user = {
//     name: 'Joe', 
//     age: 30
// }

// Con corchetes se puede acceder a la propiedad pero deben tener comillas
// console.log(user['age']);

// Destructurando en funcion

// function printInfo(user) {   // Yo espero un objeto que tenga la propiedad name
//     const { name, age } = user  // Esta es la sintaxis
//     console.log(name, age)

//     return '<h1>Hola ' + name + '<h1/>';
// }
// La destructuracion no solo funcina como parametro, puede ser en cualquier parte del código
// document.body.innerHTML = printInfo(user);

// -----------------------------------------------------------------------------------------------------------------

// Funciones anónimas

// console.log(function() {

//     return `Starting...`;
// }()) // Se tiene una función anonima, los parentesis es como ejecutar y crear la función al mismo tiempo

// // Con eventos es muy util

// const button = document.createElement('button');

// button.innerText = 'Click me';

// button.addEventListener('click', function (){ // Se le agrega una función anonima al evento click
//     alert('clicked');
// });

// document.body.append(button);

// Ambos tipos de funciones son muy similares y depende del desarrollador

// ---------------------------------------------------------------------------------------------------------

// Arrow functions
// Forma sencilla de crear funciones

// Forma tradicional
// function sumar(x, y) {
//     return x + y;
// }

// // Nueva forma
// const add = (x, y) => {
//     return x + y;
// }

// Este tipo de funciones no tan solo está enfocada en la sintaxis tambien tiene otras consideraciones como:
// como acceder variables, contexto, scope


// ----------------------------------------------------------------------------------------------------------

// Inline Arrow Functions
// Forma más sencilla

// const showText = () => {
//     return 'Hola mundo!'
// }

// const showText2 = () => 'Hola mundo...'; // Es como poner return
// const showNumber = () => 22;
// const showBoolean = () => true;
// const showArray = () => [1, 2, 3];
// const showObject = () => ({name: "Oscar"}) // Aquí hay un problema ya que lo detecta como el cuerpo de la función
// Se coloca entre parentesis, al colocarlo entre parentesis se regresa el objeto con todo y llaves
// A esto se le llama return explicito
// Si no colocamos llaves y directamente colocamos el valor es como colocar un return. return implicito

// console.log(showText());
// console.log(showText2());
// console.log(showNumber());
// console.log(showBoolean());
// console.log(showArray());
// console.log(showObject());

// -------------------------------------------------------------------------------------------------------------

// return en funciones

// const button = document.createElement('button');
// button.innerText = "Click me";

// const isAuthorized = true;

// button.addEventListener('click', () => {
//     if (isAuthorized) {
//         return alert("Está autorizado");
//     }

//     alert("No está autorizado");
// });

// document.body.append(button);


// ------------------------------------------------------------------------------------------------------------

// String literals
// Es epico poder utilizar código, en estecaso condicionales dentro de un template string y en ${}

// const background = 'yellow';
// const color = 'white';
// const isAuthorized = false;

// const button = document.createElement('button');
// button.innerText = "Click me";
// button.style = `background: ${isAuthorized ? background : 'red'}; color: ${color}`;// Interpolacion y operador ternario


// button.addEventListener('click', () => {
//     if (isAuthorized) {
//         return alert("Está autorizado");
//     }

//     alert("No está autorizado");
// });

// document.body.append(button);

// -------------------------------------------------------------------------------------------------------------

// Array methods
