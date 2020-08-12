function multiply(a, b = 2) {
  return a * b
}

// console.log(multiply(5, 4))

// Entrada: [1,3,4,6,8]
// Salida: [1,27,64,216,512]

const numeros = [1, 3, 4, 6, 8]

console.log(numeros.length)

const elevarCubo = (num) => num * num * num
// console.log(elevarCubo(4))

function mapear(array, accion) {
  const resultado = []
  for (let index = 0; index < array.length; index++) {
    resultado.push(accion(array[index]))
  }
  return resultado
}

// const numerosCubo = mapear(numeros, elevarCubo)

const numerosCubo = mapear(numeros, (num) => num / 2)
console.log(numerosCubo)

function addSquares(num1, num2) {
  function square(x) {
    return x * x
  }
  return square(num1) + square(num2)
}

// addSquares(3, 4).square(1)

console.log(addSquares(3, 4))
