//TEMAS BÁSICOS DE JS

//declaracion de variables con var 
var nombre = 'jenny';
var num = 56;
console.log(nombre)
var nombre2 = 'estefanny', edad= 23;
nombre= 'jorge';
var nombre2 = 'o'

/* soy un comentario*/ 

//declaracion con let
//pertenecen a un bloque
if (true){
    var a1 = 'hola k ase';
    let a2 = 'que tal'
}

console.log(a1);
//console.log(a2);

let a2 = 'que tal'
a2 = 'hola'
console.log(a2);

//no se puede redeclarar 

//declaracion de constantes 
const pi = 3.14159;

///tipos de datos 

//strings 
var cadena1 = 'soy texto' //comillas simples
var cadena1 = "soy texto" //comillas dobles 

var nombre = 'jenny', edad = 23, telefono = '233444';

//template literals o tamplate strings 
var cadena2= `Hola mi nombre es ${nombre}, mi edad es ${edad}, telefono ${telefono}`;

console.log(cadena2)

//si se us con cadenas simples no se obtiene el resultado deseado 
var cadena2= 'Hola mi nombre es ${nombre}, mi edad es ${edad}, telefono ${telefono}';
console.log(cadena2)

//concatenación de cadenas y variables 
var cadena = 'nombre'+ nombre ;

//se pueden incluir metodos dentro de los template literals 
var cadena2= `Hola mi nombre es ${nombre.toUpperCase()}, mi edad es ${edad}, telefono ${telefono}`;
//el metodo toUpperCase()
console.log(cadena2)

//no es necesario escapar caracteres como las comillas
var cadena2= `Hola mi "nombre" es ${nombre.toUpperCase()}`;
console.log(cadena2)

var cadena3= ' hola soy una cadena con \"comillas dobles\"' 
console.log(cadena3)

var k = ''; //cadena vacía 

//number
//solo existe un tipo de valor 
typeof 29
//"number"
typeof 52.2525
//"number"
typeof -2
//"number"

//numero octal
var numO = 0157; //0 o 0o
console.log(numO)

//numero hexadecimal 
var numH = 0xA;
console.log(numH)

//numeros binarios 
var bin = 0b11010101;
console.log(bin)

//BigInt 
var min= -(2**53)+1 //número mínimo seguro
//undefined
//min -9007199254740991
var max= (2**53)-1 //número máximo seguro
//undefined
//max
//9007199254740991
Number.isSafeInteger(4158888)
//true
Number.isSafeInteger(4158888555555)
//true
Number.isSafeInteger(41588885555555555)
//false
var big = 41588885555555555n
//undefined
Number.MAX_VALUE
//1.7976931348623157e+308
Number.MIN_VALUE
//5e-324

//NULL
var dato1 = null; //ausencia de valor 

//Undefined
var vacio;

//boolean

var a3 = true; //false

var edad= 23;
var mayorDeEdad= edad > 21
console.log(mayorDeEdad);

var contrario = !mayorDeEdad;

//objetos 

let automovil = {
    modelo: 'camaro',
    color: 'amarillo',
    costo: 8515212
};

console.log(automovil);
console.log(automovil.color);
console.log(automovil.costo);

const persona = {
    nombre: 'Miguel',
    email: 'correo@correo',
    edad: 25,
    musica: ['rock', 'metal'],
    hogar: {
        ciudad: 'CDMX',
        pais: 'México'
    }
}

console.log(persona);
console.log(persona.nombre);

persona.altura = 1.89;
console.log(persona);

persona.musica.push('banda')

console.log(persona.hogar.pais);
console.log(persona['hogar']['pais']);

