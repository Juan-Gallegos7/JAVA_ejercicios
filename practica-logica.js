// Realiza los siguientes ejercicios en JS y entrega por medio de un link tu repositorio que contiene los ejercicios resueltos.

///////////////////////////////////////////////////////////////////////////////////////////
// User profile
// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

// Crear un objeto para almacenar la información del usuario
var usuario = {};

// Solicitar al usuario que ingrese su nombre
usuario.nombre = prompt("Ingresa tu nombre:");

// Solicitar al usuario que ingrese su edad
usuario.edad = prompt("Ingresa tu edad:");

// Solicitar al usuario que ingrese sus películas favoritas (separadas por coma)
var peliculasFavoritas = prompt("Ingresa tus películas favoritas (separadas por coma):");

// Convertir la cadena de películas a un arreglo
usuario.peliculasFavoritas = peliculasFavoritas.split(',');

// Mostrar la información en la consola con un pequeño mensaje sobre las películas
console.log(`Hola ${usuario.nombre}! Tienes ${usuario.edad} años.`);
console.log("Tus películas favoritas son:");

// Iterar sobre la lista de películas y mostrar un mensaje para cada una
usuario.peliculasFavoritas.forEach(function(pelicula) {
    console.log(`La película "${pelicula.trim()}" es una de mis favoritas.`);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Highest number
// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

// Inicializar la variable para almacenar el mayor número
var mayorNumero;

// Solicitar al usuario ingresar 10 números
for (var i = 1; i <= 10; i++) {
    var numero = parseFloat(prompt("Ingresa el número #" + i + ":"));

    // Verificar si es el primer número o si es mayor que el actual máximo
    if (i === 1 || numero > mayorNumero) {
        mayorNumero = numero;
    }
}

// Mostrar el mayor número en la consola
console.log("El mayor número es: " + mayorNumero);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

// Result example: "Time for bed after 10 seconds".

// Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

// Factorial
// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

// Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

