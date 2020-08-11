const person = {
	// Atributos
	name: 'Armando',
	lastname: 'Rivera',
	country: 'Mexico',

	// Metodos
	watchNetflix: function() {
		console.log('Hello Im watching Netflix');
	},

	program: function (lenguage) {
		console.log(`Im ${this.name} and I love programing in `, lenguage);
	}
}

// Acceder a atrubutos
console.log(person.name);
console.log(person['lastname']);

// Ejecutar metodos
person.watchNetflix();
person.program('JavaScript');

// Modificar metodos
person['watchNetflix'] = function() {
	console.log('Hello Im watching Amazon Prime Video');
}


person.watchNetflix();