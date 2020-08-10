# Ejercicios de JS nivel básico

### Ejercicio 1
Elabora un programa que calcule la suma de los primeros n números naturales siendo n un número natural.

```js
function sumar(num=0) {
	// Your code here
}

var suma = sumar(100);
console.log(suma); // 5050 
```

### Ejercicio 2
Programa que permite calcular el factorial de un número n siendo n un número natural

```js
function factorial(num=0) {
	// Your code here
}

var fac = factorial(5);
console.log(fac);	// 120
```

### Ejercicio 3
Programa que imprima el tipo de dato de cada elemento de un array

```js
function tiposDatos(datos) {
	// Your code here
}

var arreglo = ['Hola', 5, '5', true, false];

var resultado = tiposDatos(arreglo);
console.log(resultado) // string, number, string, boolean
```

### Ejercicio 4
Hacer un programa que guarde los números del 1 al 100 en dos arreglos, uno de números pares y otro de impares. 

```js
function arreglos(size=100) {
	// body...

	console.log(pares); // Números pares 2, 4, 6, ..., 98, 100
	console.log(impares); // Números impares 1, 3, 5, ..., 97, 99
}

arreglos();

```

### Ejercicio 5
Realizar un menú que contenga las siguientes opciones.
1. Saludar
2. Decir algo random
3. Despedirse

```js
function menu(opcion=0) {
	// body...
}

var respuesta = menu(1);
console.log(respuesta); // Hola chavales

```

### Ejercicio 6
Hacer un programa que pida al usuario un
nombre y una contraseña. Después de esto el programa le pedirá al usuario de nuevo su contraseña, si la contraseña es la correcta, imprimirá "Bienvenido 'Nombre de Usuario'"
donde 'Nombre de Usuario' es el nombre que se ingresó, si la contraseña no es la correcta, imprimirá 'INCORRECTO'.

```js
function login(persona1, persona2) {
	// body...
}

var persona1 = {}
persona1.name = 'Armando'
persona1.password = 1234;

console.log('Ingresa nuevamente usuario y contraseña');

var persona2 = {};
persona2.name = 'Armando';
persona2.password = 1234;

login(persona1, persona2); // Bienvenido Armando

persona2.name = 'Armando';
persona2.password = 'qwerty';

login(persona1, persona2): // INCORRECTO
```

### Ejercicio 7
Realizar un programa en el que se le pida al usuario dos números del 1 al 9, num1 y num2. Después va a imprimir todos los números naturales del 1 al 100, sin embargo, cuando un número sea múltiplo de num1 o num2 o contenga alguno de estos números,va a imprimir 'clap'.

```js
function clap(num1, num2) {
	// body...
}

clap(5, 7);
```

### Ejercicio 8
Escribir un programa que pida al usuario una cadena de texto e imprima la misma cadena de texto, pero antes de cada vocal, agregue una f.

```js
function addF(text) {
	// body...
}

var fText = addF('Mi nombre es Ana');
console.log(fText); // Mfi nfombrfe fes fAnfa

```

### Ejercicio 9
Realizar un menú de una calculadora en el que las opciones van a ser:
1. Sumar dos números
2. Restar dos números
3. Multiplicar dos números
4. Dividir dos números
5. Potencia de un número
6. Raíz de un número
7. Salir

```js
function menu(opcion) {
	// case 1:
	// Ingresa dos números num1 y num2
	// console.log(num1 + num2)
}

menu(1);
```
### Ejercicio 10
Realizar un programa que imprima la serie de fibonacci hasta el elemento n que especifique el usuario

```js
function fibo(num=0) {
	// body...
}

var fibResult = fibo(5);
console.log(fibResult); // 5
```

[Serie de fibonacci](https://www.youtube.com/watch?v=yDyMSliKsxI)

### Ejercicio 11
Realizar un programa que pida al usuario
números hasta que el usuario ingrese 0,
después de esto va a realizar el promedio de todos los números ingresados.

```js
function suma(arreglo) {
	// body...
}

var arreglo = [1, 4, 7, 10];
var result = suma(arreglo);
console.log(result); // 22

```
__Tip__: Puedes ingresar los datos desde un input y con un botón los agregas a un arreglo, cuando el usuario ingrese cero devuelves la suma en consola.

### Ejercicio 12
Detectar si una cadena es palíndromo o no.

```js
function palindrome(cadena) {
	// here your code

	// return boolean;
}

if (palindrome()) {
	console.log("It's palindrome");
} else {
	console.log("It isn't palindrome");
}
```