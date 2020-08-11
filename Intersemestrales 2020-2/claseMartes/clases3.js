// Encapsulamiento

class Pet {
	constructor(name, age, gender) {
		this._name = name;
		this._age = age;
		this._gender = gender;
	}


	get name() {
		return this._name;
	}

	set name(name) {
		this._name = `Woolf Woolf Im ${name}` ;
	}
}

const myPet = new Pet('Firulais', 8, 'Male');
myPet.name = 'Bongo';

console.log(myPet.name);
