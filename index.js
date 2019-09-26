
// Prototipo de Persona.
class Persona{
    constructor(name, lastname, tall ) {
      this.name = name;
      this.lastname = lastname;
      this.tall = tall;
    }
    saludar(fn) {
      console.log(`Hola me llamó ${this.name}${this.lastname} y mido ${this.tall}`);
      if (fn) fn(this.name, this.lastname, false);
    }
    soyAlto() {
      return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(name, lastname, tall){
        super(name, lastname, tall)
    }
    saludar(fn){
        console.log(`Hola, ${this.name}! Eres un desarrolador genial`);
        if(fn){
            fn(this.name, this.lastname, true)
        } 
    }
}

function responseGretting(name, lastname, isdev){
    console.log(`Buen dia, ${name} ${lastname}!`);

    if(isdev){
       console.log(`Eres la ostia, no sabia que eras desarrollador`);
    }
}


var sergio = new Persona('Sergio', 'Medina', 186);
var donato = new Persona('Donato', 'Alvarez', 170);
var oscar = new Desarrollador('Oscar', 'Sanchez', 163);

oscar.saludar(responseGretting);
