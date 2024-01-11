// Sum of Resistors in Series

// Calculate the sum of all resistors connected in series.
// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

// Función para calcular la resistencia total en un circuito en serie
function calcularResistenciaTotal(resistencias) {
    // Verificar si el argumento es un array
    if (!Array.isArray(resistencias)) {
        throw new Error("Se esperaba un array de resistencias");
    }

    // Verificar si hay al menos una resistencia en el array
    if (resistencias.length === 0) {
        throw new Error("Se requiere al menos una resistencia");
    }

    // Calcular la resistencia total sumando todas las resistencias en serie
    const resistenciaTotal = resistencias.reduce((total, resistencia) => total + resistencia, 0);

    return resistenciaTotal;
}

// Ejemplo de uso
const resistenciasEnSerie = [10, 20, 30, 40];
const resistenciaTotal = calcularResistenciaTotal(resistenciasEnSerie);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Number divided into halves
 
// Given a number, return the number divided into its halves in an array.
 
// Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.


function dividirEnMitades(numero) {
    if (typeof numero !== 'number') {
        throw new Error("Se esperaba un número como entrada");
    }

    const mitad1 = numero / 2;
    const mitad2 = numero - mitad1;

    return [mitad1, mitad2];
}

// Ejemplo de uso
const numero = 10;
const mitades = dividirEnMitades(numero);

console.log(`El número ${numero} dividido en mitades es: ${mitades[0]} y ${mitades[1]}`);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Secret Society
 
// Find the name of a secret society based on the first letter of each member's name.
 
// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.
 
function crearNombreSociedadSecreta(nombres) {
    if (!Array.isArray(nombres)) {
        throw new Error("Se esperaba un array de nombres");
    }

    if (nombres.length === 0) {
        throw new Error("Se requiere al menos un nombre");
    }

    // Crear el nombre de la sociedad secreta utilizando las primeras letras de cada nombre
    const nombreSociedadSecreta = nombres.map(nombre => nombre[0].toUpperCase()).join('');

    return nombreSociedadSecreta;
}

// Ejemplo de uso
const miembros = ["Alice", "Bob", "Charlie", "David"];
const nombreSociedad = crearNombreSociedadSecreta(miembros);

console.log("Nombre de la sociedad secreta: " + nombreSociedad);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Online status
 
// Display online status for a list of users.
 
// Example:
// - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 
function onlineStatus(usuarios) {
    if (!Array.isArray(usuarios)) {
        throw new Error("Se esperaba un array de usuarios");
    }

    if (usuarios.length === 0) {
        throw new Error("Se requiere al menos un usuario");
    }

    const usuariosEnLinea = usuarios.filter(usuario => estaEnLinea(usuario));

    if (usuariosEnLinea.length === 0) {
        return "Ningún usuario en línea";
    }

    if (usuariosEnLinea.length === 1) {
        return `${usuariosEnLinea[0]} está en línea`;
    }

    const otrosUsuarios = usuarios.length - usuariosEnLinea.length;
    return `${usuariosEnLinea.join(', ')} y ${otrosUsuarios} más en línea`;
}

// Función de ejemplo que simula el estado en línea de un usuario
function estaEnLinea(usuario) {
    // Aquí puedes implementar la lógica real para verificar si un usuario está en línea
    // Por ahora, usaremos una simulación aleatoria para propósitos de ejemplo.
    return Math.random() < 0.5; // Simulación aleatoria del 50% de probabilidad de estar en línea
}

// Ejemplo de uso
const usuarios = ['mockIng99', 'J0eyPunch', 'glassedFer'];
const estadoEnLinea = onlineStatus(usuarios);

console.log(estadoEnLinea);


/**
 * Display online status of a lista of users
 * onlineStatus ([user1, user2. user3, user4])
 * 
 * 
 * 1. Obtener la cantidad total de usuarios 
 * 2. Calcular usuarios restantes eliminando el total lo primeros 2
 * 3. Obtener los primeros 2 
 * 4. Imprimir mensaje
*/


////// Solución ejermplo
// const users = ['mocking99', 'J0eyPuch', 'GlassedFer', 'anon123']

// function getlength(arr) {
//     return arr.length;
// }

// function calcRemaining(total) {
//     return total - 2;
// }

// function getUser(arr) {
//     const users = arr[0] + arr[1];
//     return users;
// }

// function onlineStatus(arr) {
//     const total = getlength(arr);
//     const rest = calcRemaining(total);
//     const firsUserrs = getUsers(arr);

//     console.log(`User; ${firsUsers}, and ${rest} are online`);
// }

// onlineStatus(users);





//// Solución 2 Brayan 
// const onlineStatus = (listUsers) => {
//     let text = "";
//     let totalUser = listUsers.length - 1;
//     for (let index = 0; index < listUsers.length - 1; index++) {
//         if (index === totalUser - 1) {
//             text += `${listUsers[index]} `;
//         } else {
//             text += `${listUsers[index]}, `;
//         }
//     }
//     return `${text} and 1 more online`;
// };

// console.log(onlineStatus(["mockIng99", "J0eyPunch", "glassedFer"]));


/// Solución 3 Chris
// const onlineStatus = users => {
//     let finalStatus = '';
//     let firstUser = '';
//     let secondUser = ''
//     const totalUsers = users.length;

//     switch (totalUsers) {
//         case 0:
//             finalStatus = '0 online';
//             break;
//         case 1:
//             firstUser = users[0];
//             finalStatus = `${firstUser} online`;
//             break;
//         case 2:
//             firstUser = users[0];
//             secondUser = users[1];
//             finalStatus = `${firstUser} and ${secondUser} online`;
//             break;
//         default:
//             firstUser = users[0];
//             secondUser = users[1];
//             finalStatus = `${firstUser}, ${secondUser} and ${totalUsers - 2} more online`
//             break;
//     }

//     return finalStatus;
// };

// console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
// console.log(onlineStatus([]));
// console.log(onlineStatus(['mockIng99']));
// console.log(onlineStatus(['mockIng99', 'J0eyPunch']));
// console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer', 'ozonemotion']));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Array of Multiples
 
// Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 
// Examples:
// - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
// - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 
function generarMultiplos(numero, longitud) {
    if (typeof numero1 !== 'number' || typeof longitud !== 'number') {
        throw new Error("Ambos parámetros deben ser números");
    }

    if (numero1 === 0) {
        throw new Error("El número no puede ser cero");
    }

    if (longitud <= 0) {
        throw new Error("La longitud debe ser un número positivo");
    }

    const multiplos = [];
    for (let i = 1; i <= longitud; i++) {
        multiplos.push(numero1 * i);
    }

    return multiplos;
}

const numero1 = 3;
const longitud = 5;
const resultado1 = generarMultiplos(numero1, longitud);

console.log(`Los ${longitud} primeros múltiplos de ${numero1} son: ${resultado1.join(', ')}`);


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Positive dominance in Array
 
// Write a function to determine if an array is positively dominant.
// An array is positively dominant when the majority of its elements are positive.
 
// Example:
// - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 
// una matriz es positivamente dominante si, para cada fila, la suma de los valores absolutos de los elementos en esa 
// fila, excluyendo el elemento diagonal principal, es menor que el valor absoluto del elemento diagonal principal. 

function esPositivamenteDominante(matriz) {
    if (!Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
        throw new Error("Se esperaba una matriz válida");
    }

    const filas = matriz.length;
    const columnas = matriz[0].length;

    // Verificar si la matriz es cuadrada
    if (filas !== columnas) {
        throw new Error("La matriz debe ser cuadrada para ser positivamente dominante");
    }

    // Verificar si cada fila cumple con la condición de ser positivamente dominante
    for (let i = 0; i < filas; i++) {
        let sumaAbsolutaFueraDiagonal = 0;
        let valorAbsolutoDiagonal = Math.abs(matriz[i][i]);

        for (let j = 0; j < columnas; j++) {
            if (j !== i) {
                sumaAbsolutaFueraDiagonal += Math.abs(matriz[i][j]);
            }
        }

        if (valorAbsolutoDiagonal <= sumaAbsolutaFueraDiagonal) {
            return false;
        }
    }

    // Si todas las filas cumplen con la condición, la matriz es positivamente dominante
    return true;
}

const matrizEjemplo = [
    [4, -1, 0],
    [-2, 5, 1],
    [1, 1, 3]
];

console.log("¿Es positivamente dominante la matriz? " + esPositivamenteDominante(matrizEjemplo));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Antipodal Average
 
// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.
 
// Example:
// - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`

function procesarMatriz(matriz2) {
    if (!Array.isArray(matriz2) || matriz2.length < 2 || matriz2.length % 2 !== 0) {
        throw new Error("Se esperaba una matriz con un número par de elementos");
    }

    // Dividir la matriz en dos partes iguales
    const mitad = matriz2.length / 2;
    const parte1 = matriz2.slice(0, mitad);
    const parte2 = matriz2.slice(mitad);

    // Sumar cada número de la primera parte con los números inversos de la segunda parte
    const resultado = parte1.map((valor, indice) => valor + 1 / parte2[indice]);

    // Dividir cada número del resultado entre 2
    const resultadoFinal = resultado.map(valor => valor / 2);

    return resultadoFinal;
}

const matrizEjemplo2 = [1, 2, 3, 5, 22, 6];
const resultado = procesarMatriz(matrizEjemplo2);

console.log("El resultado es: " + resultado);