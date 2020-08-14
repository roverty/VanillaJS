function iterator() {
  let index = 0
  return {
    next: () => {
      index++
      switch (index) {
        case 1:
          return { value: '😠', done: false }
          break
        case 2:
          return { value: '😧', done: false }
          break
        case 3:
          return { value: '😞', done: false }
          break
        default:
          return { value: '😄', done: true }
          break
      }
    },
  }
}
console.log('works')

// const it = iterator()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

Array.prototype[Symbol.iterator] = iterator

const arr = [1, 2, 3]

for (const it of arr) {
  console.log(it)
}
console.log('helo')
