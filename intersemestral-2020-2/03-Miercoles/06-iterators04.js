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

// Array destructing
const abc = ['a', 'b', 'c']
// const a = abc[0]
// const b = abc[1]
// const c = abc[3]

// const [a, b, c] = abc
const [a, b, c] = ['a', 'b', 'c']

const [num1, num2, num3] = cuadrado(3)

console.log(num1, num2, num3)
