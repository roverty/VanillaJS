// Creacion de funciones por medio de expresiones 
const saludar = function(nombre){
    console.log("Hola, cómo estas? "+nombre)
}

saludar("Elizabeth")


// Anidamiento de funciones
function addSquares(a,b){
    function square(x){
        return x*x
    }   

    return square(a) + square(b)
}

console.log(addSquares(2,3))

//Funciones callback
// Son funciones que llaman a otras funciones
function map(arreglo,funcion){
    var resultado = []
    for(var i= 0; i<arreglo.length; i++){
        resultado.push(funcion(arreglo[i])) // 3 -> 27
    }  
    return resultado  
}    

//let result = map(function(num){return num*num*num},[1,2,3,4])
//console.log(result)

let result = map([1,2,3,4],num => {
    return num*num*num
})
console.log(result)
