# Introudcción a la programación en **JavaScript**

## ¿Qué es la programación?  
Es el proceso de dar instrucciones a una computadora, de esta manera optimizamos tareas que para nosotros como humanos pueden resultar tediosas y tardadas sin mencionar que nos podemos equivocar, una computadora es una máquina que no se equivoca, puede ralizar operaciones a una velocidad más rápida que los humanos.  

## ¿Qué es JavaScript?
La web nace con los primeros navegadores, como netScape era difícil encontrar las páginas ya que se tenían que buscar directamente con las URL.  

En ese momento las páginas eran estáticas, no había interacción y así nace JS. El fundador es **Brendad Eich**, en el 95 generó mocha que es un lenguaje para NetScape, este lenguaje intentaba darle interactividad a las páginas fue creado en 3 semanas, después evolucionó a LiveScript y a finales de 1995 nace JS esto fue más una cuestión de Marketing porque en ese momento estaba naciendo Java que tenía mucho auge en la comunidad.  

Microsoft decide tomar JS para su navegador IE y saca JScript, es lo mismo que JS pero para IE.  

En 1997 ECMA que es una organización decide poner orden para evitar que cada navegador tuviera distintos lenguajes, ECMA se encarga de decidir los estándares para los navegadores.  

V8 nace en el 2008, es una herramienta de JS que corre en el navegador.  

En el 2009 se crea Node.js, es la forma en la que podemos trabajar con JS en el backend.  

En el 2010 debido a la adopción de JS nacen los framewoks web.  

En el 2015 nace ES6 que es JS con nuevas funcionalidades y cada año se agregan más.  

**ECMAScript** es una especificación estandarizada por **Ecma International**. Fue creada para estandarizar *JavaScript* y para ayudar a fomentar múltiples implementaciones independientes.

[Evolución de la web](http://www.evolutionoftheweb.com/)

## Variables
_Una variable es la representación de un lugar en memoria que reservamos para guradar un valor_

```js
// Declarar una variable y asignarle un valor
var nombre = 'Armando';

// Declarar variables
var edad;	// Le digo al navegador que reserve un espacio en memoria llamado edad

// Inicializar variables
edad = 21;

// Decalaramos e inizalizamos un arreglo
var elementos = ["Computadora", 'Celular'];

// Declaramos un objeto
var persona = {
	nombre: 'Armando',
	edad: 21
}

// Mostramos el contenido de las variables
console.log(elementos);
console.log(persona);

// Accedemos a un elementos del arreglo
console.log(elementos[0])

// Accedemos a un atributo del objeto
console.log(persona.nombre)
```

## Control de flujo
### Sentencia if

La sentencia if recibe un valor booleano (verdadero o falso), si se es verdadero ejecuta el código dentro del bloque.

```js
if (true) {
	console.log('Esta sentencia se ejecutará');
}
```

```js
var edad = 18;
if (edad >= 18) {
	console.log('Eres mayor de edad');
}
```

Podemos incluir un bloque **else** que se ejecutará en caso de que el valor booleano no sea verdadero

```js
var edad = 18;
if (edad >= 18) {
	console.log('Eres mayor de edad');
} else {
	console.log('No eres mayor de edad');
}
```

## Ciclos
Nos sirven para repetir código.

## Ciclo for
Recive una variable que será la que estaremos iterando, después recibe una condición, cuando la condición se cumpla el ciclo ya no seguirá iterando, el tercer argumento es el incremento de la variable
```js
for(var i = 0; i < 10; i++) {
	console.log('Iteración: ', i);
}
```

## Ciclo while
Es un ciclo que se cumple hasta que se cumpla una condición

```js
var i = 0;
while(i<10) {
	console.log('Iteración: ', i);
	i++;
}
```

### Cuando utilizar un ciclo for y uno while
Generalmente utilizamos un cilco for cuando sabemos la cantidad de veces que vamos a repetir un arreglo, por ejemplo si tenemos un x cantidad de usuarios y queremos imprimir sus nombres, utilizamos un ciclo for que itera x veces.  

Si queremos mandar email a nuestros suscriptores podemos utilizar un ciclo while, mientras nuestro usario esté suscrito le mandaremos emails, no sabemos hasta cuando va a quitar su suscripción.

## Switch case
Es usado como una especie de menú.
```js
var opcion = '1';
switch(opcion) {
	case 1: 
		console.log('Seleccionaste la opción 1');
		break;
	case 2: 
	console.log('Seleccionaste la opción 2');
		break;
	case 3: 
		console.log('Seleccionaste la opción 3');
		break;
	case 4: 
		console.log('Seleccionaste la opción 4');	
		break;

	default:
		console.log('Selecciona una opción válida');	
		break;
}
```

## Funciones
Son un conjunto de sentencias que podemos utilizar con los valores que ya guardamos antes en las variables.  
Es un conjunto de tareas para generar algo y regresarlo.  
Las funciones pueden recibir parámetros que son valores de entrada de la función, se colocan dentro de los paréntesis.
```js
function miFuncion(num) {
	console.log('El número ingresado es: ', num);
}
```
Una función que retorna un valor
```js
function cuadrado(num) {
	return num ** 2
}
```

Las mandamos llamar de la siguiente manera
```js
miFuncion(6);

var x = cuadrado(6); // x contiene el valor de 36
```


## Ejercicios

1. Programa que permite calcular la suma de los primeros n números naturales, siendo n un número natural.

```js
var num = Number(process.argv[2]);

function sumar(num) {
	num = num ? num : 5;
	return num * (num+1) / 2
}

console.log(sumar(num));
```

2. Programa que permite calcular el factorial de un número.
```js
var num = process.argv[2];

function factorial(num) {
	num = num ? num : 1;

	if (num == 0 || num == 1) {
		return 1;
	}

	return num * factorial(num - 1);
}

console.log(factorial(num));
```

## Coersiones
Existen dos tipos de Coersión:  
Coersiones impícitas y explícitas  

Las **ímplicitas** es cuando el lenguaje nos ayuda y cambia el tipo de dato a otro
Es la forma en la que podemos cambiar un tipo de dato a otro.

```js
4 + "7"; // 47 esto es una string
4 * "7"; // 28 esto es un number
2 + true; // 3 esto es un number
false - 3; // -3 esto es un number
```

La cohersión explícita es cunado forzamos a cambiar un tipo de dato a otro si necesitamos que sea de cierto tipo

```js
var a = 20;
var b = a + '';
console.log(b);
console.log(typeof(b)); // String
```

Cambiamos el tipo de manera explícita
```js
var c = String(a);
var d = Number(c);

var e = Boolean(a);
console.log(e);
```
Ejercicio con JS y HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Learning JS</title>
</head>
<body>
	<h1>I'am learning JavaScript</h1>
	<input type="text" id='input' >
	<button id="boton">Dame click</button>
	<script src="./ejercicio.js"></script>
</body>
</html>
```

```js
var boton = document.getElementById('boton');
var input = document.getElementById('input');

boton.addEventListener(('click'), () => {
	console.log(factorial(input.value));
});

input.addEventListener(('input'), () => {
	console.log(factorial(input.value));
});

function factorial(num) {
	console.log(typeof(num));
	num = num ? num : 1;
	
	if (num == 0 || num == 1) {
		return 1;
	}

	return num * factorial(num - 1);
}
```
