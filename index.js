
function persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

persona.prototype.saludar = function () {
console.log(`hola, me llamo ${this.nombre}${this.apellido}`)
}

persona.prototype.soyAlto = function () {
    if (`${this.altura}` > 180) { 
        console.log(`${this.nombre} es una persona alta`);
    }else{
        console.log(`${this.nombre} es una persona bajita`);
    }
}

class Desarrollador extends persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola, ${this.nombre}! Eres un desarrolador genial`);  
    }
}


var ellande = new persona('Ellande', 'Medina', 186);
var manolo = new persona('Manolo', 'Alvarez', 170);
var alba = new persona('Alba', 'Sanchez', 163);

