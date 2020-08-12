const greet = 'hello world'
function callOuterVars() {
  let x = 12
  console.log(greet, x)
}

callOuterVars()

// Encapsulamiento con clousures
const counter = (function () {
  let contadorPrivado = 0
  function changeBy(val) {
    contadorPrivado += val
  }

  return {
    incrementar: function () {
      changeBy(1)
    },
    decrementar: function () {
      changeBy(-1)
    },
    value: function () {
      // return contadorPrivado
    },
  }
})()

console.log(counter.value())
counter.incrementar()
console.log(counter.value())
console.log(counter.contadorPrivado)
