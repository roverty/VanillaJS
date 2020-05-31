## Contexto

Hacemos referencia al contexto con la palabra reservada `this`, este es un concepto utilizado en muchos lenguajes de progarmación, principalmente cuando hablamos de programación orientada a objetos.

__this__ en una clase hace referencia a la instancia de la misma o lo que es igual al objeto en sí.

Cuando corremos un script en el navegador se genera el objeto global y la variable this. en un principio los dos tienen el mismo valor.

## Alert y prompt
window tiene muchos métodos y apis que podemos utilizar, dos de ellos son alert y prompt.
```js
this == window // true

const name = this.prompt('Introduce tu nombre');
this.alert(`Hola ${name}`)
```

## Objetos con métodos
La diferencia principal entre una función anónima y una arrow function es que la segunda no modifica el contexto.
```js
const movie = {
	title: 'Psyco',
	year: 1856,
	play: function() {
		// const title = 'Winne Phoo';
		// console.log(`Playing ${title}`);
		console.log(this);
		console.log(`Playing ${this.title}`);
	}
}

console.log(movie);
console.log(this);
movie.play();
```

## Contexto en el html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>This</title>
</head>
<body>
	
	<h1 >Hola desde Index</h1>
	
	<button id="button">Click me</button>

	<script src="prueba.js"></script>
</body>
</html>
```

```js
const boton = document.querySelector('#button');
const header = document.querySelector('h1');

const name = this.prompt('Ingresa tu nombre');
this.alert(`Bienvenido ${name}`);

console.log(this);
boton.addEventListener('click', function () {
	// this.alert(`Bienvenido ${name}`);
	console.log(this);
	this.innerText = 'Click me again'
	header.innerHTML = `Hello guy <span style="color: red"> Im red </span>`;
});
```

## Deconstrucción
```js
const front = ['Angular', 'React', 'Vue', 'Svelt'];
const backend = ['Node', 'Mongodb', 'Express', 'Hapi'];

const js = ['JS vanilla', ...front, ...backend];

// console.log(js);

const person = {
	name: 'Armando',
	edad: 22
}

const frontend = {
	...person,
	tech: front
}

/*
const frontend = person;
frontend.tech = front;
*/

console.log(frontend);
console.log(person);
```
