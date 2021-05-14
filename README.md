# Vanilla JS

```sh
author: <rhodfra@gmail.com>
May 2021
JS
```

## ¿Qué es Javascript?

**JavaScript (JS) es un lenguaje de programación multiplataforma**

- **Se considera un lenguaje orientado a objetos, pero en realidad es multiparadigma, soporta otros paradigmas como el imperativo y el funcional.**
- Es un lenguaje basado en prototipos
- **Es un lenguaje interpretado (o just-in-time compiled)**
- Java y Javascript no tienen relación como lenguajes de programación. Sin embargo al igual que Java, Javascript es una marca registrada de Oracle.
- Las implementación de JS se rigen por el estándar ECMA-262.
- El nombre oficial del lenguaje es ECMAScript.
- Fue inventado en 1995 por Brendan Eich
- JS originalmente se creo para "darle vida" a los navegadores, es decir, para hacerlo más interactivos.
- JS nació cómo un lenguaje del lado del cliente, es decir que solo se podía ejecutar en navegadores web. Actualmente se puede ejcutar JS en aplicaciones de escritorio, dispositivos móviles y en aplicaciones de escritorio.

## ¿Dónde encontrar información?

- La mejor documentación que he tenido oportunidad de leer está en la página de desarolladores de Mozilla.
  - [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [w3schools.com](https://www.w3schools.com/Js/)
- [javascript.info](https://javascript.info/)
- [What the f\*ck is JavaScript?](https://github.com/denysdovhan/wtfjs)
- [jshero](https://www.jshero.net/en/success.html)

## Cheatsheet

### If

Los siguientes valores se evalúan como falsos (también conocidos como valores Falsy):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- the empty string (`""`)

### for of

```js
/ Initialize array of shark species
let animals = [ "tiger", "lion", "hammerhead", "fish" ];

// Print out each type of shark
for (let animal of animals) {
    console.log(animal);
}
```


### Spread Operator

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]

const arr2 = [...arr]; // like arr.slice() // copy array
```

#### Ordenamiento de objetos (sort)

```js
var persona1 = {
  nombre: "Mike",
  apellido: "Peaterson",
};

var persona2 = {
  nombre: "Rodrigo",
  apellido: "Lopez",
};

var persona3 = {
  nombre: "Armando",
  apellido: "Flores",
};

var personas = [persona1, persona2, persona3];

personas.sort((p1, p2) => {
  const pA = p1.nombre.toUpperCase();
  const pB = p2.nombre.toUpperCase();

  let comparison = 0;
  if (pA > pB) {
    comparison = 1;
  } else if (pA < pB) {
    comparison = -1;
  }
  return comparison;
});
```

### Map, Filter, Reduce, ...


#### Map

```js
let numbers = [0, 1, 2, 5, 10];
numbers.map((num) => {
  return num * 2;
});
```

#### Filter

```js
numbers.filter ( num => {
	return num > 2
	continue
})
```

#### Every

Si todos los elementos del arreglo cumplen cierta condición regresa verdadero, caso contrario regresa falso

```js
var ages = [32, 33, 18, 40];
function checkAdult(age) {
  return age >= 18;
}
var sonMayores = ages.every(checkAdult);
```

#### Reduce

```js
var numeros = [1, 2, 3];
var total = numeros.reduce(function (sum, current) {
  console.log(sum, current);
  return sum + current;
}, 0);

var total2 = numeros.reduce(function (sum, current) {
  console.log(sum, current);
  return sum - current;
});
```

#### Some

Revisa si alguno de los elementos cumple con cierta condición.

Si alguno de los elementos cumple, regresa true, en caso contrario regresa false

```js
var ages = [32, 33, 18, 40];
function checkAdult(age) {
  return age >= 18;
}
var sonMayores = ages.some(checkAdult);
```

#### for each

```js
var total = 0;

[1, 2, 3].forEach(function (num) {
  total += num;
});
```