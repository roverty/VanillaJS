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

* Prohibe totalmente asignar variables sin definirlas previamente.

<!-- Refs: {check: manipulacion de arreglos en prog. func. ,url : https://opensource.com/article/17/6/functional-javascript } -->

### Referencias

* [An introduction to functional programming in JavaScript](https://opensource.com/article/17/6/functional-javascript)