## Map
Es una función que nos permite aplicar una función a cada elemento del arreglo.

```js
const numbers = [1, 2, 3, 4];

numbers.map((item) => {
	console.log(`Hola yo soy el ${item}`);
});

function cuadrado(number) {
	return number ** 2;
}

const sum = (item) => {
	return item + 2;
}

console.log(numbers.map(cuadrado))
console.log(numbers.map(sum))

console.log(numbers.map(item => item ** 3));
```

## Map filter
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
		title: 'La Odisea',
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

// Imprimo los titulos
const titles = books.map((item) => item.title);
console.log(titles);

// Declaro un nuevo array con las mismas propiedades pero ahora con una extra que es duration
const newbooks = books.map(item => {
	item.duration = item.pages * 60;
	return item;
})

// Modifica el objeto nuevo y el anterior
// Esto porque se pasa por referencia
console.log(newbooks);
console.log(books);


// Para evitar lo anterior hago una deconstrucción del objeto
const newbooks = books.map(item => {
	// Creo un nuevo objeto y le paso los atributos recién creados
	return {
		...item,
		duration: item.pages * 60
	};
});

console.log(newbooks);
console.log(books);

// Filter crea un nuevo array con base en una condición
const bigBooks = books.filter(item => item.pages > 500);
console.log(bigBooks);
```