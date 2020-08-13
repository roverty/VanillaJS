# Ejercicios de JS nivel básico

### Ejercicio 1
Crear una clase personas que tenga  tres propiedades y tres métodos, a elegir.
No se puede utilizar la palabra reservada class, las propiedades tiene que ser privadas.
**Nota:** Usar closures

### Ejercicio 2
Explorar la API de rick and morty o alguna otra de tu agrado y mostrar información de algun personaje en **consola**.

### Ejercicio 3
Explorar la API de rick and morty o alguna otra de tu agrado y mostrar información de algun personaje en la **ventana del navegador**.

### Ejercicio 4
Crear dos botones en el navegador, deben hacer lo siguiente:
- Mostrar un mensaje en el navegador.
- Cambiar de color aleatoriamente el background del navegador cada que se presione.

### Ejercicio 5
Traer los primeros 100 pokemones registrados en la pokedex.
Imprimir en el navegador los pokemones cuyo nombre sea de longitud mayor a 5 caracteres.

**Tips**: Usar la función filter.
La petición se realiza a https://pokeapi.co/api/v2/pokemon?limit=100

### Ejercicio 6
Escribe una función que reciba un arreglo y retorne el índice de un elemento tal que, los elementos que esten a la izquiera sumen lo mismo que los números que están a la derecha

```js
function balancedFunction(array) {
	// Your code here
}

const array = [/* Your array here*/];
const index = balancedFunction(array)
```

Ejemplo:
Si el array es:

```js
const array = [1, 2, 3, 4, 6];
```
El indice es 3, ya que el elemento que ocupa el indice 3 es el cuatro y lo que está a la izquierda (1, 2, 3) suma lo que está a la derecha (6).

Ejemplo:
```js
const array = [3, 1, 2, 1];
```
La respuesta sería 1, ya que todo lo que está a la izquierda (3), suma lo que está a la derecha (2, 1)

**Nota**: El primer índice de un array es 0, no 1

### Ejercicio 7
Escribe una función que reciba 4 parámetros:
- obj: será un objeto
- operation: podrá ser *edit* o *delete*
- prop: recibe una propiedad del objeto
- newValue: recibe un valor

Si la operación es *edit* retorna el mismo objeto, si aparete de ser edit, recibo en la función una propiedad esta propiedad deberá ser modificada y el valor será lo que viene en *newValue*.
Si la oeración es *delete* tengo que eliminar la propiedad que me indican y *newValue* será undefined.
Al final retornar el nuevo objeto modificado.

#### Ejemplo

```js

function manipulateStudentRecord(obj, operation, prop, newValue) {
	// Your code here
}

const person = {
	name: 'Rodrigo',
	lastName: 'Francisco',
	city: 'Mexico',
	hobby: 'programming'
}

const obj = manipulateStudentRecord(person, 'delete', 'name', undefined);
const obj2 = manipulateStudentRecord(person, 'edit', 'name', 'Armando');

console.log(obj);
/* // Resultando esperado
{
	lastName: 'Francisco',
	city: 'Mexico',
	hobby: 'programming'
}
*/

console.log(obj2);

/* // Resultando esperado
{
	name: 'Armando',
	lastName: 'Francisco',
	city: 'Mexico',
	hobby: 'programming'
}
*/
```