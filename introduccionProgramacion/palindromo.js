/*
	Ejercicio
	Detectar si una cadenar es palíndromo o no
*/

String.prototype.reverse = function() {

	let x = this.length;
	let reverseString = "";
	while (x>=0) {
		// reverseString = reverseString + this.charAt(x);
		reverseString += this.charAt(x);
		x--;
	}
	return reverseString;
	
};

function palindrome(cadena) {
	let cadenaInput = cadena
					.toLowerCase()
					.replace(/ /g, '')
					.trim();
	let cadenaReverse = cadenaInput.reverse();

	// console.log(cadenaReverse==cadenaInput);
	return(cadenaReverse===cadenaInput);
}


if (palindrome('  		RaDaR 		')) {
	console.log('Es palindromo');
} else {
	console.log('No es palindromo');
}
