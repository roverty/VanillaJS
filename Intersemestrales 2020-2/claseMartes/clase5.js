// Estaticos

/*class Circulo {

	static PI = 3.1415;

	constructor(radio) {
		this.radio = radio;
	}

	area() {
		return Circulo.PI * this.radio * this.radio;
	}
}


console.log(Circulo.PI);

const myCircle = new Circulo(10);
console.log(myCircle.area());*/

/*
class Circulo {
	static PI = 3.1415;

	static area(radio) {
		return Circulo.PI * radio * radio;
	}
}


console.log(Circulo.PI);

console.log(Circulo.area(10));*/


class Circulo {
	static PI = Math.PI;

	static area(radio) {
		return Circulo.PI * Math.pow(radio, 2);
	}
}


console.log(Circulo.PI);
console.log(Circulo.area(10));