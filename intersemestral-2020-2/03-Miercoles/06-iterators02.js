// Construir una función que regrese los primeros * n * números naturales elevados al cuadrado
function cuadrado(num) {
  let n = 0
  return {
    next() {
      n++
      if (n <= num) {
        return {
          value: n * n,
          done: false,
        }
      }
      return {
        value: undefined,
        done: true,
      }
    },
  }
}

let cuadradoIterator = cuadrado(3)
// 1, 4, 9 , undefined
console.log(cuadradoIterator.next())
console.log(cuadradoIterator.next())
console.log(cuadradoIterator.next())
console.log(cuadradoIterator.next())

for (const it of cuadradoIterator) {
  console.log(it)
}
