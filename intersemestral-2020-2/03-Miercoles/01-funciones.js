// Funciones

// Funciones de manera declarativa
function holamundo(nombre) {
  return `hola ${nombre}`
}
// Funciones en expresion
const helloworld = function (nombre) {
  return `hola ${nombre}`
}

// Function constructor
const saludoMarker = new Function('nombre', 'return `hello ${nombre}`')
// function saludoMarker(nombre){return `hello ${nombre}`}

console.log(saludoMarker('Rodrigo'))

// Self-invoking ó IFFE
;(function () {
  console.log('Me ejecuto y me destruyo inmediatamente')
})()

// Arrow functions (ES6)

// const multiplicacion = (num1, num2) => {
//   return num1 * num2
// }

// Se puede quitar return y {} porque solo tenemos una linea de codigo en la fn
const multiplicacion = (num1, num2) => num1 * num2
const mostrarNumeros = (num1, num2) => console.log(num1, num2)

console.log(multiplicacion(4, 2))
mostrarNumeros(3, 1)

// Ejemplo de funcin sin parametros
const saludo = () => console.log('Hola mundo')
saludo()

const saludarPersona = (nombre) => console.log('Hola mundo ' + nombre)
saludarPersona('Armando')
;(() => {
  console.log('Me ejecuto y me destruyo inmediatamente')
})()
;(() => console.log('HOLAAAA'))()

// {nombre:'Gabriel',edad:22}
const nombre = 'Gabriel'
const edad = 22

// const objPersonaMaker = (nombre, edad) => {
//   return { nombre: nombre, edad: edad }
// }

// Se usa en VueJS
const objPersonaMaker = (nombre, edad) => ({ nombre: nombre, edad: edad })
const persona = objPersonaMaker(nombre, edad)
console.log(persona)
