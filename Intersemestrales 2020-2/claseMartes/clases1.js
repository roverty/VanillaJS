
/*function pet(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

const myPet = pet('Firulais', 'Male', '4');

console.log(myPet); // Undefined
*/

/*function Pet(name, gender, age) {
	const pet = {
		name: name,
		gender: gender,
		age: age,
	}

	pet.eat = function() {
		console.log('Im ', this.name, ' and I love eating');
	};

	return pet;
}

const myPet = Pet('Firulais', 'Male', '4');
const mySecondPet = Pet('Bongo', 'Male', '5');

console.log(myPet); // Object
console.log(mySecondPet); // Object

mySecondPet.eat();
*/

function Pet(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;

	this.eat = function() {
		console.log('Im ', this.name, ' and I love eating');
	};
}

const myPet = new Pet('Firulais', 'Male', '4');

console.log(myPet); // Object
myPet.eat();