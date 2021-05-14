var numeros = [12,3,-1,4,9,0,7,-2]
// tamañno del arreglo
console.log(numeros.length)

// MÉTODOS DE ARREGLOS

// sort 
numeros.sort()
console.log(numeros)

numeros.push(96)
console.log("Agregando 96")
console.log(numeros)

// Pop saca un elemento de la der. de arreglo
numeros.pop()
console.log("Después de sacar el último elemento")
console.log(numeros)

// Shift saca un elemento de la izq. de arreglo
numeros.shift()
console.log("Sacamos el -1")
console.log(numeros)

numeros.unshift(50)
console.log("Agregando 50 al arreglo")
console.log(numeros)

numeros.splice(2,3)
console.log("Sacamos el elemento 0")
console.log(numeros)

var ultimo = numeros[numeros.length - 1]
console.log("El ultimo elemento es: "+ ultimo)

var heterogeneo = ["Armando", 12, true, "Rodrigo", "Etc", 12.4]
console.log(heterogeneo)


// Recorder el arreglo e imprimir cada elemento
for(var i = 0; i<heterogeneo.length; i++){
    console.log(`El elemento ${i} tiene el valor de ${heterogeneo[i]}`)
}

// FOR OF
console.log("\nUSando for of\n")
for(var iterador of heterogeneo){
    console.log("El valor de iterador es", iterador)
}

// FOR IN Se utilizar en objetos

var persona = {
    nombre : "Armando",
    apellidos : "Rivera",
    edad : 23
}

var persona2 = {
    nombre : "Rodrigo",
    apellidos : "Lopez",
    edad : 23
}

console.log("Las propiedad del objeto persona son:")
for(var atributo in persona){
    console.log(persona[atributo])
}

// Desestructuracion arreglos
var sueldos = [12500,12300,4456,32233]
var armando = sueldos[0]
var rodrigo = sueldos[1]
var mayito = sueldos[2]
var daniel = sueldos[3]

//var [jesus, luis, daniela, luisa] = sueldos 
var [jesus, luis, daniela] = sueldos 

console.log("Sueldo de jesus "+ jesus)
console.log("Sueldo de luis "+ luis)
console.log("Sueldo de daniela "+ daniela)
//console.log("Sueldo de luisa "+ luisa)

// Desestructuracion objetos

var {nombre,edad} = persona2

/*  Solo es la explicación
    var {nombre,edad} = {nombre:"Armando",apellidos:"Rivera",edad:12}
*/

console.log("Desestructuracion con objetos")
console.log(nombre,edad)

var ropa = ["calcetines","zapatos",["sombrero","bufanda"],12,true,12.23]

var datos = [
    ["Saul", "Rodrigo", "Joel"],
    ["Raul", "Armando", "Mike"]
]
console.log("Ejemplo de matriz")
imprimirMatriz(datos)

var alumnos = ["Fausto","Noe"]

console.log("Ejemplo de insercion de arreglo en arreglo")
datos.push(alumnos)
imprimirMatriz(datos)

function imprimirMatriz(datos){
    for(var i=0; i<datos.length; i++){
        for(var j=0;j<datos[i].length;j++){
            console.log(`Elemento en la posicion [${i}][${j}] ${datos[i][j]}`)
        }
    }
}