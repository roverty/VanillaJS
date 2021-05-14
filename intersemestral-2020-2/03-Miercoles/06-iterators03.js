// Construir una función que regrese los primeros * n * números naturales elevados al cuadrado
function cuadrado(num) {
  return {
    [Symbol.iterator]() {
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
    },
  }
}

for (const it of cuadrado(4)) {
  console.log(it)
}
