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
// Si no colocamos llaves y directamente colocamos el valor es como   un return. return implicito

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
// const names = ['Oscar', 'Rian', 'Maria'];

// // Toma muchas lineas
// // for (let i = 0; i < names.length; i++) {
// //     const element = names[i];
    
// //     console.log(element);
// // }

// // forEach

// names.forEach(function(name){ // Recibe una función, esta al ejecutarse lo que va retornar son los valores que la función estará recibiendo
//     console.log(name);
// });
// // Es un callback jsjsjs


// // map
// const newNames = names.map(function (name){ // Produce el mismo resultado que forEach pero no tan solo lo recorre, retorna un nuevo arreglo
//     // console.log(name)
//     // Esta función en cada iteración debe retornar un valor, se usa mucho en React
//     return `Hola ${name}`;
// });
// console.log(newNames);


// // find
// // Retorna el valor del primer elemento
// const nameFound = names.find(function(name) {
//     if( name == 'Oscar' ){
//         return name;
//     }
// });

// console.log(nameFound);


// // filter
// // filter lo que haces es que permite crear un nuevo arreglo con elementos que hayamos filtrado, con elementos que cumplan una condición
// // Es como un delete
// // Devuelve los elementos que cumplen una condicion
// const filtrated = names.filter(function(name){
//     if (name == 'Oscar') {
//         return name;
//     }
// })
// console.log(names); // Se tiene el arreglo original
// console.log(filtrated);


// concat 

// const names = ['Oscar', 'Rian', 'Maria'];
// const newNames = ['Marcos', 'David', 'John'];

// names.concat(newNames); // Produce un nuevo arreglo combinando ambos
// No altera los arreglos originales


// ----------------------------------------------------------------------------------------------------------

// Spread operator
// Forma practica de concatenar

// const names = ['Ryan', 'Joe', 'Maria'];
// const newNames = ['Marcos', 'Mario', 'John'];

// console.log([...names, ...newNames]); // Tambien se puede con objetos

// const user = {
//     name: "ryan",
//     lastname: "ray",
// }

// const address = {
//     street: 'Olmo',
//     city: 'Izcalli',
// }

// const userInfo = {...user, ...address};
// console.log(userInfo);

// --------------------------------------------------------------------------------------------------------------

// ECMAScript Modules
// En el navegador aún no están por defecto estos modulos
// import {add, multiply, active, points, title} from './add.js' ;// En llaves se hace un destructuring
// console.log(active, points, title)
// console.log(add(10, 20));
// console.log(multiply(10, 20));

// La extensión .js en algunos frameworks no es necesaria, es solo asunto de sintaxis
// Se pueden exportar todo tipo de variables

// ---------------------------------------------------------------------------------------------------------------

//  Optional chaining
// Se usa cuando tenemos propiedades que no existen o aún no tenemos
// const person = {
//     name: 'Oscar',
//     address: {
//         city: 'Izcalli'
//     },
// }
// console.log(person?.location?.city); // El signo es el optional chaining, si location existe accede a su valor city


// ---------------------------------------------------------------------------------------------------------------

// Async await
// Datos de un backend

const ol = document.createElement('ol');

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(datos) {
//         console.log(datos);
//         datos.forEach(function(post) {
//             const li = document.createElement('li');
//             li.innerText = post.title;
//             ol.append(li);
//         });
//         document.body.append(ol); 
//     });

// Esta sintaxis puede ser mejorada y moderna
// Los await funcionan si están dentro de una función async

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const data = await response.json();
    data.forEach(function(post) {
        const li = document.createElement('li');
        li.innerText = post.title;
        ol.append(li);
    });
    document.body.append(ol); 
}

loadData();

console.log('Linea 2');

// The end