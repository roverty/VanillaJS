## Programación Funcional con JS

### Funciones

¿Qué son las funciones en JS? 

Por ejemplo en C, las funciones son apuntares a la primera dirección de memoria del código de la función, 

* de manera que cuando la función se manda a llamar el apuntador de programa *salta* a esa dirección, 
* pero, en JS, ¿Qué pasa? 
  * Las funciones son objetos con propiedades especiales.

Sí, en JS una función es un Objecto.  A pesar de que `typeof` nos diga que es una función, en realidad es un objeto. Un poco raro ...

#### Declaración de funciones

* *Function Declaration*

  ```js
  function holaMundo(nombre) {
    return 'Hola, cómo estas? ${nombre}'
  }
  ```

* *Funcition Expression*

  ```js
  function holaMundo(nombre) {
    return `Hola, cómo estas? ${nombre}`
  }
  
  const saludarMundo = function (nombre) {
    return `Mucho gusto, mi nombre es ${nombre}`
  }
  ```
   **PREGUNTA**

  ¿Cuál será la salida del siguiente código?

  ```js
  const multiplicar = function (num1, num2) {
    return num1 * num2
  }
  
  const num1 = 5
  const num2 = 6
  
  const resultado = multiplicar(num1, num2) * num1
  console.log('TAG:RES', resultado) // 150
  ```

* *Function constructor*

  ```js
  const saludoMaker = new Function('nombre', 'return `Hola soy ${nombre}`')
  console.log(saludoMaker('Rodrigo'))
  ```

* *Self-Invoking function o IIFE function*

  * IFFE : Inmmediately Invoked Function Expression

  La función que se involca a si misma es una función anonima que se ejecuta inmediatamente cuando el motor JS la lee.

  ```js
  ;(function () {
    console.log('Me ejecuto y destruyo inmediatamente')
  })()
  ```

  **EJERCICIO 1**  

  Crear una función self-invoke que reciba un parámetro y lo imprima.

  **solución**

  ```js
  // tengoque poner es ;
  // porque estoy usando un linter y no me deja poner ; al final de cada línea
  ;(function (nombre) {
    console.log(`Me ejecuto y destruyo inmediatamente, hola ${nombre}`)
  })('Rodrigo')
  ```

  **EJERCICIO 2**

  Crear una función IIFE devuelva un valor y este se asigne a una nueva variable.

* *Arrow functions*

  Las arrow functions o funciones flecha (porque se utiliza el operador =>) nos permiten acortar la sintaxis para escribir una función. 

  Con esta nueva sintaxis es posible omitir hasta tres simbolos esenciales en la declaración de funciones

  * La palabra reservada `function`
  * La palabra return (En ocasiones)
  * Las llaves que encierran el cuerpo de la función (En ocasiones)

  Veamos un ejemplo:

  ```js
  const multiplicacion = (num1, num2) => num1 * num2
  					// (..args) => <Cuerpo de la funcion>
  console.log(multiplicacion(4, 3))
  ```

  * Si el cuerpo de la función es de una línea 

    * se pueden omitir los `{}`

    * se puede omitir `return`

  * Si la función no recibe argumentos se puede escribir así:

    ```js
    const saludo = () => console.log('Hola mundo in => fn')
    saludo()
    ```

    **EJERCICIO 1**

    Construye una función self-invoke utilizando arrow functions

    **solución**

    ```js
    ;(() => console.log('Hola mundo in => fn'))()
    ```

  > OJO: Si tenemos más de una línea en una función y no podemos `return`, la función retorna `undefined` por defecto; tanto en funciones normales como  en funciones flecha.

  **EJERCICIO 2**

  Escribir una función *in-line* que reciba dos parámetros

  * Nombre y edad

  Y devuelva un objeto que tenga esas dos propiedas cómo "clave valor"

  La salida deber ser 
  
  ```js
  {nombre:'Rodrigo',edad:12}
  ```
  
  **solución**
  
  ```js
  const personaObjMaker = (nombre, edad) => ({ nombre: nombre, edad: edad })
  // Notese el usado de () para quitar la ambiguedad
  ```
  
  **Características de las arrow functions**
  
  En esencia una arrow function es una función, pero tiene dos distinciones importantes:
  
  * No tiene su propia referencia `this`
  * No son adecuadas para definir *métodos de objetos*
  * Las funciones normales definen la referencia `this` a partir de donde son llamadas. Analizar el siguiente ejemplo
  
  ```js
  class Person {
    constructor(name) {
      this.name = name
    }
    arrow() {
      setTimeout(() => {
        console.log('Arrow: ', this.name)
      }, 1000)
    }
    normal() {
      setTimeout(function () {
        console.log('Normal: ', this.name)
      }, 1000)
    }
  }
  
  const person = new Person('Bob')
  person.arrow()
  person.normal()
  ```
  
  A Lo anterior se le conoce como *lexical scope*, el scope de una arrow función es donde fue definida.
  
  [Ver ejemplo después de ver funciones de arreglos] Otro ejemplo que permite ilustrar eso es el siguiente:
  
  ```js
  const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach(function (number) {
        console.log(this.phrase, number)
      })
    },
  }
  
  printNumbers.loop()
  // Output
  //undefined 1
  //undefined 2
  //undefined 3
  //undefined 4
  
  // Para arreglar este problema tendríamos que usar bind
  
  const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      // Bind the `this` from printNumbers to the inner forEach function
      this.numbers.forEach(
        function (number) {
          console.log(this.phrase, number)
        }.bind(this),
      )
    },
  }
  
  printNumbers.loop()
  ```
  
  Con una función flecha se soluciona el problema
  
  ```js
  const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach((number) => {
        console.log(this.phrase, number)
      })
    },
  }
  
  printNumbers.loop()
  ```

Antes ver clousures analicemos otras particularidades de JS.

**Funciones con parámetros por defecto**

EN ES6 se incluyen parámetros por defecto en las funciones. Analizar el siguiente ejemplo.

```js
function multiply(a, b = 2) {
  return a * b;
}

multiply(5); // 10
multiply(5,3); // 15
```

**Funciones que reciben funciones cómo parámetro**

```js
const cube = (x) => x * x * x

// This function returns new array with elements to the cube
// Action stands for the funcion receive as an argument
function map(array, action) {
  let result = []
  for (let index = 0; index < array.length; index++) {
    result.push(action(array[index]))
  }
  return result
}

const numsToCube = map([0, 2, 5, 8, 9], cube)
console.log(numsToCube)
```

Un función **callback** nos sirve para ejcturar una función inmediatamente después de que otra función retorno un valor. Son útiles en llamadas *asincrónas*.

Una sintaxis más "púlida" o mejor dicho, cómun en JS es escribir el código anterior de la siguiente forma:

```js
function map(array, action) {
  let result = []
  for (let index = 0; index < array.length; index++) {
    result.push(action(array[index]))
  }
  return result
}

const numsToCube = map([0, 2, 5, 8, 9], (x) => x * x * x)
console.log(numsToCube)
```

**Funciones anidadas**

La idea de que las funciones son objetos se respalda aquí pues, en JS es posible tener funciones dentro de funciones, de lo cual se aprovechan las *clousures* que veremos en un momento.

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
```

* Notar que la función `square` queda encapsulada y no puede ser accedida más que por la función `addSquares`

**Paso por valor vs paso por referencia**

<!-- Nos saltamos esta parte, es igual que en otros lenguajes: Los datos primitivos se pasan por valor y los Objetos (incluye arrays) se pasan por referencia --> 

### Clousures

Las clousures son funciones que 

* hacen uso de las características de las funciones 
* y del *alcance léxico*

Una clousure se crea al momento de que creamos una función que accede a una variable que esta en su alcance léxico, es decir *más arriba*

**Ejemplo de lexical scope (y clousure en sí)**

```js
const greet = 'hello world'
function callOuterVars() {
  console.log(greet)
}

callOuterVars()
```

**Ejemplo donde no se destruye una variable referenciada por una función clousure**

```js
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

**Ejemplo de contador**

```js
// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3 
```

* El problema es que cualquier otra función puede modificar la variable `counter` porque tiene un alcance global. ¿Cómo soluciona?

```js
var counter = (function () {
  var privateCounter = 0
  function changeBy(val) {
    privateCounter += val
  }

  return {
    increment: function () {
      changeBy(1)
    },

    decrement: function () {
      changeBy(-1)
    },

    value: function () {
      return privateCounter
    },
  }
})()

console.log(counter.value()) // 0.

counter.increment()
counter.increment()
console.log(counter.value()) // 2.

counter.decrement()
console.log(counter.value()) // 1.

console.log(counter.privateCounter)
```

### Map, filter, reduce

#### Algunos métodos de arreglos que pueden ser utiles

Un arreglo es una variable especial, que puede contener más de un valor a la vez.

Un arreglo puede contener muchos valores con un solo nombre, y puede acceder a los valores haciendo referencia a un número de índice.

Los arreglos son un tipo especial de objetos. El operador typeof en JavaScript devuelve "objeto" para arreglos.

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruits = ["Banana", "Orange", ["Read Apple","Green Apple"], "Mango"];
fruits.length;   // the length of fruits is 4 
fruits.sort(); // puede recibir una funcion
var numbers = [1,2,4,7,3,2,-1]
number.sort((a,b)=> a-b)
fruits.reverse();
frutis.join() // Convierte el arreglo en string
fruit.push("Grapes")
fruits.pop();              // Removes the last element ("Mango") from fruits 
fruits.shift();            // Removes the first element "Banana" from fruits 
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits 
fruits.splice(0, 1);        // Removes the first element of fruits 
fruits.splice(2, 0, "Lemon", "Kiwi"); // Add elements "lemon" and "kiwi" at index 2 and removes 0 elements
var last = fruits[fruits.length - 1];
fruits.slice() // copia de arreglo
```

**Desestructuración de arreglos**

```js
// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;
```

#### Map

```js
let numbers = [0, 1, 2, 5, 10];
numbers.map( num =>{
	return num*2
});
```

#### Filter

```js
numbers.filter ( num => {
	return num > 2
	continue
})
```

#### For each

```js
var total = 0;

[1, 2, 3].forEach(function (num) {
  total += num;
});
```

#### Reduce

```js
var total = numeros.reduce(function (sum, current) {
   console.log(sum,current) 
  return sum + current;
}, 0);

var total2 = numeros.reduce(function (sum, current) {
	console.log(sum,current)
  return sum - current;
});
```

#### Some

Revisa si alguno de los elementos cumple con cierta condición.

Si alguno de los elementos cumple, regresa true, en caso contrario regresa false

```js
var ages = [32, 33, 18, 40];
function checkAdult(age) {
  return age >= 18;
}
var sonMayores = ages.some(checkAdult);
```

#### Every

Si todos los elementos del arreglo cumplen cierta condición regresa verdadero, caso contrario regresa falso

```js
var ages = [32, 33, 18, 40];
function checkAdult(age) {
  return age >= 18;
}
var sonMayores = ages.every(checkAdult);
```

<!-- #### Map + Filter + Reduce -->

#### Spread operator

```js
const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 
//  ["head", "shoulders", "knees", "and", "toes"]

const arr2 = [...arr]; // like arr.slice() // copy array
```

### Programación funcional

Es un paradigma de programación 

* Como el estructurado o el orientado a objetos

Que se basa en las funciones matemáticas

* Es decir, pensar todo en *términos de funciones*

Las principales ventajas de usar este paradigma es que conseguimos una mayor eficiencia en nuestro programas y código más limpio.

Tiene dos fundamentos importantes:

* Datos inmutables
* Crear *pure functions*

#### Lo que no es programación funcional

En la programación funcional no debemos utilizar los siguientes bloques de código

- Ciclos (Loops )
  - **while**
  - **do...while**
  - **for**
  - **for...of**
  - **for...in**
- Declaración de variables con **var** o **let**
- Funciones vacías
- Mutación de objetos (Por ejemplo: **o.x = 5;**)
- Métodos mutadores de objetos como
  - **copyWithin**
  - **fill**
  - **pop**
  - **push**
  - **reverse**
  - **shift**
  - **sort**
  - **splice**
  - **unshift**

#### Pure functions

* No por usar funciones en nuestros programas quiere decir que ya estemos utilizando el paradigma *funcional*

En la programación funcional existen 2 tipos de funciones: puras e impuras.

Una función pura debe satisfacer 2 propiedades:

* **Transparecencia referencial**: La función regresa siempre el mismo valor para el mismo argumento. Es decir las funciones no pueden depender de *argumentos mutables*. Veamos el siguiente ejemplo

  ```js
  let numTotalAsistentes = 16
  
  function pasarLista(numAsistentes) {
    return numAsistentes > numTotalAsistentes
  }
  
  let numAsistentes = 10
  console.log(pasarLista(numAsistentes))
  ```

* **Libre de efectos colaterales**: La funcion no debe tener efectos colaterales.

  * Se consideran efectos colaterales: I/O (Escribir un archivo log, por ejemplo), modificar un objeto mutable, reasignar una variable.
  * Considera el siguiente ejemplo

  ```js
  function multiplicar(a, b) {
    console.log('Los argumentos son', a, b)
    return a * b
  }
  
  console.log(multiplicar(5, 6))
  ```

#### Inmutabilidad

Considera el siguiente ejemplo de cómo se debería escribir código en *programación funcional*

```js
const topeAltura = 160

function esHobbit(altura) {
  return altura < topeAltura
}
const altura = 158

console.log('TAG:HOBBIT ', esHobbit(altura))
```

Siempre se debe usar const para hacer que las variables que declaremos no vuelvan a ser reasginadas (eso es imutabilidad).

Pero ....

Existe un problema con los objetos. Considera el siguiente ejemplo

```js
const obj = { foo: 'bar' }
obj.foo = 'dump'
```

Ahora si usamos un método llamada `freeze` que ofrece JS podemos hacer que los atributos del objeto sean inmutables.

```js
const objFreezed = Object.freeze({ foo: 'bar' })
objFreezed.foo = 'changed' // No marca error
console.log(objFreezed)  // Imprime el obj original
```

Prueba agregado `'use strict'` en la primera línea de tu archivo.  Con ello entramos un el *modo estricto* en el cual el motor de JS que ejecuta nuestro código se vuelve más estricto. 

Entre las cosas que enfatiza están

* Prohíbe totalmente asignar variables sin definirlas previamente.

<!-- Refs: {check: manipulacion de arreglos en prog. func. ,url : https://opensource.com/article/17/6/functional-javascript } -->

### Iterators 

Antes de analizar el concepto de *iterators*. Veamos el uso de `for of`,

`for of` nos permite trabajar un arreglos de JS de la misma manera que cómo se haría en un `for` de Python o en un `foreach` de Java. Analicemos el siguiente ejemplo:

```js
const abc = ['a', 'b', 'c']
for (const letra of abc) {
  console.log(letra)
}
```

Lo que hace `for of` es crear un ciclo iterativo sobre `objetos iterables`. 

Para que un objeto sea iterable tiene que utilizar o implementar el protocolo `iterator`.

* Existen más objetos iterables de los que nos podríamos imaginar. 
  * String, Array, Map, Set, etc.
* Los objetos creados por el usuario no implementan este protocolo

Generalmente utilizar colecciones que implementen este protocolo es lo común, pero iremos un paso más allá.

Comprenderemos como funciona la sentencia `for ... of`

Los **iterators**, en JS son objetos que definen una secuencia. 

* Estos objetos se caracterizan por tener un único método llamado `next()`. Que regresa dos propiedades
  * **value**: El siguiente valor de la secuencia
  * **done**: Es un booleano que se vuelve verdadero si la secuencia ha sido consumida por completo.

**Obteniendo el iterador de un Arreglo**

Veamos que hace la siguiente porción de código

```js
const abcInterator = abc[Symbol.iterator]() 
console.log(abcInterator)
console.log(abcInterator.next())
console.log(abcInterator.next())
console.log(abcInterator.next())
console.log(abcInterator.next())
```

* La primera línea obtiene una función iteradora
  * Notése que se utiliza la notación  de corchete (`[]`) en lugar de la notación punto
    * Esto se debe a que manda a llamar a la función con un nombre de primera vista desconocemos pero que esta definido dentro de `Symbol.iterator`
    * Recordemos que los `Symbols` son un tipo de dato inmutable  de JS.
* Ahora, bien, el objeto que hemos recuperado tiene una única función llamada `next()`
  * Dicha función nos devuelve el siguiente valor del arreglo y así sucesivamente hasta que la secuencia se termina.

**¿Qué pasa si queremos construir nuestro propio *iterator*?**

Construir una función que regrese los primeros *n* números naturales elevados al cuadrado

```js
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
console.log(cuadradoIterator.next())
console.log(cuadradoIterator.next())
console.log(cuadradoIterator.next())
```

**¿Qué pasa si queremos que nuestro código se pueda usar en un `for of`?**

* Para ello nuestra función debe de regresar un objeto que tenga el método `[Symbol.iterator]` ya que todo aquel objeto que implemente este método se considera iterable.

```js
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

for (const cuad of cuadrado(4)) {
  console.log(cuad)
}
```

**Array destructing (De-estructuración de arreglos)**

¿Cuál es la salida del siguiente código?

```js
const [a,b,c] = ['a', 'b', 'c']
```

```js
//Output
// a = 'a'
// b = 'b'
// c = 'c'
```

* Cada variable del lado izquierdo se le asigna un elemento del arreglo siguiente el orden en el que aparecen las variables del lado izquierdo.
  * Por ejemplo, la primera variable del lado izquierdo es `a` y por ello se le asigna lo que contiene el elemento `0` del arreglo. Y así sucesivamente

La de-estructuración funciona gracias a los iteratores, por lo que es posible hacer lo siguiente:

```js
const [num1, num2, num3] = cuadrado(3) // Se usa la función que se definió previamente.
console.log(num1, num2, num3)
```

**Iterators para objetos creados a partir de clases definidas por el usuario**

Un objeto definido por el usuario por defecto no tiene la propiedad *iterator*, pero podemos implementarla como se aprecia en la siguiente porción de código.

```js
class NumerosMaker {
  constructor() {
    this.numeros = [1, 2, 3, 4]
  }
  [Symbol.iterator]() {
    const numeros = this.numeros
    let index = -1
    return {
      next() {
        return {
          value: numeros[++index],
          done: index >= numeros.length,
        }
      },
    }
  }
}

const numeros = new NumerosMaker()[Symbol.iterator]()
console.log(numeros.next())
console.log(numeros.next())

for (const num of new NumerosMaker()) {
  console.log(num)
}
```

### Generators

Los generadores son *iterators* con una sintaxis más sencilla (Suggar syntax). Analicemos el siguiente ejemplo

```js
function* numerosMaker() {
  yield 1
  yield 2
  yield 3
  // return false
  yield 4
}

let nums = numerosMaker()
console.log(nums.next())
console.log(nums.next())
console.log(nums.next())
console.log(nums.next())
console.log(nums.next())
```

* Un generador es una función y la podemos reconocer porque tiene un asterisco (`*`) después la palabra `function`.
* `yield` acompañada de un elemento es el valor que devolverá la función next() al ser invocada.
  * En el ejemplo la primera vez que se llama a `next()` se devuelve 1.
  * Luego, si se llama de nuevo a `next()` se duelve 2, que es el siguiente valor de la función usando `yield`

* Recordemos que al llamar a `next()` se devuelve un objeto con un `value` y un estado llamado `done`
  * Sí la función generadora, tiene un `return` antes de un `yield` entonces `done` se cambiará a true y por lo tanto `value` tendrá el valor de `undefined` o de lo que regrese `return`

**Hagamos que un objeto pueda ser iterable**

```js
let contador = -1
let personaItMaker = {
  [Symbol.iterator]: function (obj) {
    return {
      next() {
        contador++
        switch (contador) {
          case 0:
            return { value: obj.nombre, done: false }
            break
          case 1:
            return { value: obj.apellidos, done: false }
            break
          case 2:
            return { value: obj.edad, done: false }
            break
          default:
            return { value: undefined, done: true }
            break
        }
      },
    }
  },
}

let persona = {
  nombre: 'Rodrigo',
  apellidos: 'Gutierritos',
  edad: 12,
}

const pit = personaItMaker[Symbol.iterator](persona)

console.log(pit.next())
console.log(pit.next())
console.log(pit.next())
console.log(pit.next())
```

El código de arriba falla si intento utilizar en un `for of`,  ¿Qué debo hacer para solucionarlo?

*Hint*: Utilizar  *generators*

Inspirarse en la siguiente porción de código;

```js
const myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

for (let value of myIterable) { 
    console.log(value); 
}
```

**Hackeando el protocolo *iterator* definido en el prototipo de los arreglos**

```js
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

Array.prototype[Symbol.iterator] = iterator

const arr = [1, 2, 3]
// Explicar spread operator
console.log(...arr)
// Nos damos cuenta que spread operator también usa iterators
```

### Composición de funciones

Al hablar de composición de funciones debemos recordar nuestras clases de *pre-cálculo* porque la idea es la misma. De acuerdo el sitio web *hackermoon*:

> **La composición de funciones** es un concepto matemátrico que nos permite combinar 2 o más funciones en una nueva función.

Recordemos que la notación para composición de funciones es : $f \circ g \; (x)$, lo cual significa $f(g(x))$ 

**NOTA:**  Probablemente la notación matemática no se renderize bien en Github, por lo cual recomiendo descargar el archivo y abrirlo con [Typora](https://typora.io/), el cual esta disponible para los 3 sistemas operativos.

En resumen trataremos de emular $f(g(x))$  y expresarlo en la mejor forma posible.

Sigamos el ejemplo de abajo

```js
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
  { nombre: 'Rodrigo', apellidos: 'Francisco', edad: 18 },
  { nombre: 'Ricardo', apellidos: 'Sanchez', edad: 80 },
  { nombre: 'Manuel', apellidos: 'Gonzales', edad: 16 },
]

// f(g(h(m(personas))))
const resultado = esMayorEdad(
  combinarNombre(propiedadesAMayusculas(head(personas)))
)

console.log(resultado)
```

En la línea donde se hace la encadenazación de funciones:

```js
// f(g(h(m(personas))))
const resultado = esMayorEdad(
  combinarNombre(propiedadesAMayusculas(head(personas)))
)
```

Vemos que la sintaxis comienza a hacerse confusa. ¿Qué podemos hacer?

**Ejemplo con Reduce**

```js
const numeros = [1, 3, 4, 6]
const total = numeros.reduce((sum, current) => {
  console.log(sum, current)
  return sum + current
}, 0)

console.log(total)
```

**Ejemplo con reduceRight**

Hace lo mismo que reduce solo que empezando de derecha a izquierda

```js
const numeros = [1, 3, 4, 6]
const total = numeros.reduceRight((sum, current) => {
  console.log(sum, current)
  return sum + current
}, 0)

console.log(total)
```

**Creando nuestra propia función `compose`**

`composite` es una función que normalemente proveen dos librerías distitnas de programación funcional

* Lodash
* Ramda

No las vamos a usar, en lugar de ello crearemos nuestra propia implementación de `compose`

```js
// Implementacion de compose
const compose = (...funs) => (fnParam) =>
  funs.reduceRight((acum, currentFun) => currentFun(acum), fnParam)
```

Con todo lo aprendido intenta describir cómo funciona a mayor detalle la función `compose`

Uso de nuestra función `compose`

```js
const resultado2 = compose(
  esMayorEdad,
  combinarNombre,
  propiedadesAMayusculas,
  head
)(personas)

console.log('TAG:RESULTADO2', resultado2)
```

**Ejemplo completamente matemático**

```js
const g = (x) => x + 2
const h = (x) => x / 2
const i = (x) => x ** 2

const fNested = (x) => g(h(i(x)))

const res3 = compose(g, h, i)(2)

console.log(fNested(2))
console.log(res3)
```

**Cómo utilizar la composición para sustituir el concepto de herencia?**

Veamos el siguiente ejemplo

```js
// Design object thinking of what they are
// inheritance

// Design object thinking of waht they do

const barker = (state) => ({
  bark: () => console.log(`Woof, I am ${state.name}`),
})

const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
})

const killer = (state) => ({
  kill: () => console.log(`I am ${state.name} and I shall kill u all`),
})

const dog = barker({ name: 'lala' })
dog.bark()

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  }
  // obj assign takes properties (and methods) of given parentesis
  //and asign them into first parameter
  return Object.assign({}, barker(state), driver(state), killer(state))
}

murderRobotDog('cofin').bark()
murderRobotDog('cofin').kill()

```

¿Se debería usar composición de funciones en JS en lugar de herencia? En mi opinión, por lo menos ej JS creo que sí pese a que estamos muy acostumbrados a utilizar *herencia*. La razón es que JS y lo que usualmente escribimos en JS lo permiten y lo hacen ver natural. Probablemente este patrón no funcionaría tan bien en Java o Kotlin. Además, son lenguajes más estrictos y la idea probablemente no les gustaría.

VueJS utiliza esta concepto para implementar  ` vuex`, una biblioteca de ellos mismo para conservar y comunicar estados entre componentes.

### Referencias

* [An introduction to functional programming in JavaScript](https://opensource.com/article/17/6/functional-javascript)