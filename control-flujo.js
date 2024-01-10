// Pasos para declarar una estructura if-else
// 1. Palabra reservadas (if)
// 2. Establcer una condicion ()
// 3. Delimitar el bloque que se ejecuta si la condicone se cumple


// Condicion que evalue si un numero "n" es mayor que 10
// let n = 10;

// if(n>10) {
//     console.log("El numero es mauor a 10")
// } else {
//     console.log("El numero no es mayor a 10")
// }

// Condicion que evalue si "n" es mayor que 10 y menor que 20
// let n = 25;

// if(n>10 && n<20) {
//     console.log("El numero es mayor a 10 y menor a 20")
// } else {
//     console.log("El numero no es mayor a 10 o es mayor a 20")
// }




// Si mi condicion es mayor a 10 y menor a 20
// Si mi concicion es mayor que 10 y mayor que 20
// Si mi numero es igual a 10
// Si mi numero es igual a 20
// Si mi numero no es mayor que 10 ni menor que 20

// function evaluarCondiciones(a, b) {
//     console.log(`a=${a} b=${b}`);
//     if (a > 10 && a < 20) {
//         console.log("Mi condición es mayor a 10 y menor a 20");
//     }

//     if (a > 10 && a > 20) {
//         console.log("Mi condición es mayor que 10 y mayor que 20");
//     }

//     if (a === 10) {
//         console.log("Mi número es igual a 10");
//     }

//     if (a === 20) {
//         console.log("Mi número es igual a 20");
//     }

//     if (!(a > 10 || a < 10)) {
//         console.log("Mi número no es mayor que 10 ni menor que 10");
//     }
// }

n=10

if(n>10 && n<20) {
    console.log("El número es mayor a 10 y menor a 20")
} else if (n<20) {
    console.log("El numero es mayor que 20")
} else if (n == 10) {
    console.log("El numero es igual a 10")
} else if (n == 20) {
    console.log("El numero es igual a 20")
} else {
    console.log("El numero no se encuntra dentro del rango")
}
 

// Operador tenario

// Declaración de un operador ternario
// 1. Let para comenzar su declaración 
// 2. Asignar un nombre
// 3. Asignar un valor =
// 4. Establecer el 

// Operador que me permita evaluar si una calificación es aprobatoria
let calificacion =7;
let evaluarCalificación = calificacion >= 7 ? "Aprobado" : "Reprobado"
console.log(evaluarCalificación);

// if (calificacion >=7) {
//     console.log("Aprobado")
// } else {
//     console.log("Reprobado")
// }

// Switch

// 1. Palabra reservada switch
// 2. Abrimos un parentesis (caso)
// 3. Abrir llaves que delimiten el codigo

let color = "azul"

switch(color.toLowerCase()){
    case "rojo":
        console.log("Tu color es rojo")
    break;

    case "verde":
        console.log("Tu color es verde")
    break;

    case "azul":
        console.log("Tu color es azul")
    break;

    default:
        console.log("No conozco ese color")
    break;
}





// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */


// Crear una función para verificar la edad para votar
function verificarEdadParaVotar(edad) {
    if (edad >= 18) {
        console.log("¡Tienes la edad suficiente para votar!");
    } else {
        console.log("Lo siento, no tienes la edad suficiente para votar.");
    }
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */


// Función para obtener el promedio y determinar si es aprobatorio

function obtenerPromedioYEvaluar(calificacion1, calificacion2, calificacion3, calificacion4) {

    var promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    console.log("El promedio del alumno/a es: " + promedio);

    if (promedio >= 7) {
        console.log("¡Aprobado!");
    } else {
        console.log("Reprobado.");
    }
}


/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */


/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */



