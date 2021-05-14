// for of
const abc = ['a', 'b', 'c']

for (const letra of abc) {
  //   console.log(letra)
}
// String, Array, Map, Set

// Iterator
// next()
// 2 propieddades
// * value
// * done

const abcIterator = abc[Symbol.iterator]()
console.log(abcIterator)
console.log(abcIterator.next())
console.log(abcIterator.next())
console.log(abcIterator.next())
console.log(abcIterator.next())
console.log(abcIterator.next())
console.log(abcIterator.next())
