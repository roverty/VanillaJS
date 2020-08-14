// f(g(x))

// funcion m
const head = (array) => array[0]

// funcion h
const propiedadesAMayusculas = (obj) => ({
  nombre: obj.nombre.toUpperCase(),
  apellidos: obj.apellidos.toUpperCase(),
  edad: obj.edad,
})

// funcion g
const combinarNombre = (obj) => ({
  nombreCompleto: `${obj.nombre} ${obj.apellidos}`,
  edad: obj.edad,
})

// funcion f
const esMayorEdad = (obj) => obj.edad >= 18

const personas = [
  { nombre: 'Manuel', apellidos: 'Gonzalez', edad: 16 },
  { nombre: 'Rodrigo', apellidos: 'Francisco', edad: 18 },
  { nombre: 'Ricardo', apellidos: 'Sanchez', edad: 80 },
]

// f(g(h(m(personas))))
const resultado = esMayorEdad(
  combinarNombre(propiedadesAMayusculas(head(personas)))
)

console.log('TAG:RESULTADO', resultado)

// Lodash, Ramda
const compose = (...funs) => (fnParam) =>
  funs.reduceRight((acum, currentFun) => currentFun(acum), fnParam)

// f(g(h(m(personas))))
const resultado2 = compose(
  esMayorEdad,
  combinarNombre,
  propiedadesAMayusculas,
  head
)(personas)
//compose(..args)(personas) ¿Por qué?

console.log('TAG:RESULTADO2', resultado2)
