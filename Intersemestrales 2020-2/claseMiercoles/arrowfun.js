class Persona {
  constructor(nombre) {
    this.nombre = nombre
  }
  funNormal() {
    setTimeout(function () {
      console.log('Funcion normal: ', this.name)
    }, 1000)
  }
  funArrow() {
    setTimeout(() => {
      console.log('Funcion flecha: ', this.name)
    }, 1000)
  }
}

const persona = new Persona('Armando')
console.log(persona.nombre)
persona.funNormal()
persona.funArrow()
