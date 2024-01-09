/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */



// Calcular el perímetro de un círculoh
function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

// Calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

// Calcular el cuadrado de un número
function calcularCuadrado(numero) {
    return numero * numero;
}

// Calcular la conversión de grados Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Calcular el valor del voltaje dados la resistencia y la corriente
function calcularVoltaje(resistencia, corriente) {
    return resistencia * corriente;
}

// Calcular el volumen de una esfera
function calcularVolumenEsfera(radio) {
    return (4.0 / 3.0) * Math.PI * Math.pow(radio, 3);
}




// Declaración de funciones
// 1. Palabra reservada function
// 2. Aginar un nombre a nuestra function
// 3. Colocar parentesis y despues llaves

// function mifunction(){
//     return "Hola";
//     console.log("Mi primera función");
// }

// //Funcion que saluda a quien la mande a invocar 
// function saludarUsuarrio(nombre){
//     // console.log("Hola " + nombre)
//     console.log(`Hola ${nombre}`)

// }

// // Funcion que realice la suma de cutro numero diferentes
// function sumarNumeros (a, b, c, d) {
//     // return a+b+c+d;
//     // console.log(a+b+c+d)
//     return `La suma de los numero es: ${a+b+c+d}`; 

// }



// ///////////////////////////////////////////////////////////

// // FUNCION FLECHA 

// // 1. Palabra reservada const
// // 2. Asignar nombre
// // 3. Operador de asignacion '= y los parametros ()'
// // 4. fot arrow => y llaves {}

// const mifuncionflecha = () => {console.log("Mi función flecha " + "en JAVA")}

// const sumaNumerosFlecha = (e, g) => {return e + g}

// const sumaNumerosFlecha1 = (e, g) => (e+g)

// // const sumaNumerosFlecha2 = (a, b) => a + b
// // console.log(sumaNumerosFlecha2(6,7))   



