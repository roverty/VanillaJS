class Movie {
	// Los metodos no se declaran con la palabra reservada function
	// Atributos se definene en el contstructor

	constructor(title, age) {
		this.title = title;
		this.age = age;
	}

	watch() {
		console.log(`Im watching ${this.title}`);
	}
}

const myMovie = new Movie('Pyscho', 1865);

console.log(myMovie.title);
console.log(myMovie.age);

myMovie.watch();