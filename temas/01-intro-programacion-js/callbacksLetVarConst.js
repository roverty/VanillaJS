// let var y const

// Scope, no puedo acceder a variables que están declaradas en bloques internos
function login(name, password) {
	let success;
	if (name === 'Armando' && password === 1234) {
		console.log('Bienvenido');
		success = true;
		// let success = true;
	} else {	
		console.log('Datos incorrectos');
		success = false;
		// let success = false;
	}

	console.log(success);
}


login('Armando', 1234);

// Hoisting
var x = 5;

(function hola () {
    console.log("x:", x); // undefined
    var x = 10;
    console.log("x:", x); // 10
}());

let persona = {
	name: 'Armando',
	age: 22
}
console.log(persona);

persona.age = 21;
console.log(persona);


/*
	
	let nombre = 'Rodrigo'	// nombre ===> XXX 'Rodrigo',
	nombre = 'Francisco'    // nombre ===> 'Francisco'
	
	const persona = {}		// persona ===> {}
	persona.name = 'Pablo'	// persona ===> {name:'Pablo'}

*/

const car = {
	model: 'BMW',
	year: 2020
}

console.log(car);

// persona = {...car};
persona = car;
console.log(persona);

persona.name = 'Rodrigo';
console.log(persona);
console.log(car);

/************** Funciones de Callback ******************/
function calcular(tacos, tortas, callback) {
	console.log('Torta');
	console.log('Tacos');
	let propina = 10;
	return callback(tacos, tortas, propina);
}

function hacerCuenta(num1, num2, propina) {
	return num1 * num2 + propina;
}

// Definiendo la función por separado
// let cuenta = calcular(10, 10, hacerCuenta);

// Con función anónima
/*
let cuenta = calcular(10, 10, function (num1, num2, propina) {
	console.log('Gracias por tu preferencia')
	return num1 * num2 + propina;
});
*/

// Con arrow function
let cuenta = calcular(10, 10, (num1, num2, propina) => {
	console.log('Gracias por tu preferencia')
	return num1 * num2 + propina;
});

console.log(cuenta);

// Función setTimeout
/*
function saludar() {
	console.log('Hola despues de 1 segundo');
}

setTimeout(saludar, 1000);
*/

/*
setTimeout(()=> {
	console.log('Hola despues de 1 segundo');
}, 1000);
*/

/* Usando var y let */
for(let i=0; i<10; i++) {
	setTimeout(()=> {
		console.log(i);
	}, 1000);
	// console.log('Hola despues del setTimeout');
}

/*
i=0
setTimeout(()=> {
	console.log(i);
}, 1000);

i=1
setTimeout(()=> {
	console.log(i);
}, 1000);

i=2
setTimeout(()=> {
	console.log(i);
}, 1000);

*/

// Imprimir los números del 1 al 10 cada segundo
/*
function time(num=3) {
	let i = 0;
	let id = setInterval(()=> {
		if (i>num) {
			clearInterval(id);
		}
		console.log(i++)
	}, 1000);
	
}

time()
*/