// 'use strict'
// Pure functions
// transparencia referencial
// libre de efectos colaterales

const numTotalAsistentes = 16

function pasarLista(numAsistentes) {
  // console.log('Hola mundo')
  return numAsistentes > numTotalAsistentes
}
// console.log(pasarLista(10))

// Objetos inmutables

const obj = { foo: 'bar' }
// obj = { bar: 'foo' }
obj.foo = 'fizz'

const objFreeze = Object.freeze({ foo: 'bar' })
// objFreeze.foo = 'fizz'
console.log(objFreeze)

i = 12
