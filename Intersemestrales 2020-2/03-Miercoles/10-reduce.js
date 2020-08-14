const numeros = [1, 3, 4, 6]

const total = numeros.reduceRight((acum, current) => {
  console.log(acum, current)
  return acum + current
}, 0)

console.log(total)
