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
