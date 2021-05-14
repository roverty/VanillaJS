## Reduce

La función reduce la podemos aplicar sobre un arreglo de tal manera que reduce nuestro arreglo a su mínima expresión.

La función recibe dos valores, comunmente llamados __count__ y __value__.
__count__: es el valor acumulado sobre el arreglo.
__value__: es el valor actual del arreglo.

```js
const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const suma = numbers.reduce((count, value)=> {
	return count + value;
}, 0);
```

```js
const factorial = numbers.reduce((count, value)=> {
	return count * value;
}, 1);
```

```js
const books = [
	{
		title: 'Harry Potter',
		year: 2001,
		pages: 500
	},
	{
		title: 'El retrato de Dorian Gray',
		year: 2002,
		pages: 600
	},
	{
		title: 'Drácula',
		year: 2003,
		pages: 700
	},
	{
		title: 'Estudio en escarlata',
		year: 2004,
		pages: 800
	},
	{
		title: 'La ciudad y los perros',
		year: 2005,
		pages: 500
	},
];

const totalPages = books
	.map(item => {
		return {
			...item
		} 
	})
	.filter(item => item.pages > 300)
	.map(item => item.pages)
	.reduce((count, item) => count + item);

console.log(totalPages);
```

### Ejercicio practico con Map y Reduce

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Demo</title>
</head>
<body>
	<h1>Status de los primeros 20 personajes de Rick and Morty</h1>
	
	<div id="image">
		<img src="" alt="">
	</div>
	
	<div id="status">
		
	</div>

	<script src="demo.js"></script>
</body>
</html>
```

```js
const statusDiv = document.getElementById('status');
const imageDiv = document.getElementById('image');

const url = 'https://rickandmortyapi.com/api/character/';

function getCharacters(url) {
	return fetch(url);
}

function renderizar(status) {
	// console.log(status);
	const alive = status.Alive;
	const dead = status.Dead;
	const unknow = status.unknown;

	const aliveP = document.createElement('p');
	aliveP.innerHTML = `<strong>Vivos</strong>: ${alive}`;
	statusDiv.appendChild(aliveP);

	const deadP = document.createElement('p');
	deadP.innerHTML = `<strong>Muertos</strong>: ${dead}`;
	statusDiv.appendChild(deadP);

	const unknowP = document.createElement('p');
	unknowP.innerHTML = `<strong>Desconocido</strong>: ${unknow}`;
	statusDiv.appendChild(unknowP);
}

function renderizarImage(url) {
	getCharacters(`${url}1`)
	.then(data => data.json())
	.then(data => {
		// console.log(data)
		imageDiv.childNodes[1].src = data.image;
		// console.log(imageDiv.childNodes[1].src)
	})
}

function reduceArray(characters) {
	const status = characters
		.map(character => character.status)
		//.filter(status => status === 'Alive')
		.reduce((obj, status)=> {
			// console.log(obj)
			// console.log(status)
			if (obj[status]) {
				obj[status] = obj[status] + 1;
			} else {
				obj[status] = 1;
			}
			return obj;
		}, {});

	console.log(status);
	renderizar(status);
}

let characters;
getCharacters(url)
	.then(data => data.json())
	.then(data => { 
		characters=Object.values(data.results);
		console.log(characters);
		//console.log(data);
		reduceArray(characters);
	})

// console.log(characters);

renderizarImage(url);
```
