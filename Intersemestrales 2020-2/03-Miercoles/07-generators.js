function* numerosMaker() {
  yield 1
  yield 2
  return false
  yield 3
}

const nums = numerosMaker()

console.log(nums.next())
console.log(nums.next())
console.log(nums.next())
console.log(nums.next())
