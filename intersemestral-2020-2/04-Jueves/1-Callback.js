// Una función de callback es una función que se ejecuta cuando ya terminó algun otro proceso

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
