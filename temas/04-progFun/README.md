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

  **EJERCICIO** 

  Crear una función self-invoke que reciba un parámetro y lo imprima.

  **solución**

  ```js
  // tengoque poner es ;
  // porque estoy usando un linter y no me deja poner ; al final de cada línea
  ;(function (nombre) {
    console.log(`Me ejecuto y destruyo inmediatamente, hola ${nombre}`)
  })('Rodrigo')
  ```

* *Arrow functions*

  Las arrow functions o funciones flecha (porque se utiliza el operador =>) nos permiten acortar la sintaxis para escribir una función.

#### Clousures

### Map, filter, reduce

#### Algunos métodos de arreglos que pueden ser utiles

#### Map

#### Filter

#### Reduce

#### Map + Filter + Reduce

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