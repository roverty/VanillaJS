/*
Herencia
*/

class Animal {

	constructor(name) {
		this.name = name;
	}

	eating() {
		console.log('Eating');
	}

	sleeping() {
		console.log('Sleeping');
	}
}


class Dog extends Animal {
	constructor(name) {
		super(name);
	}

	bark() {
		console.log('Barking');
	}

	sleeping() {
		super.sleeping();
		console.log('Dont disturb');
	}
}

const myDog = new Dog('Firulais');


myDog.bark();
myDog.eating();
myDog.sleeping();