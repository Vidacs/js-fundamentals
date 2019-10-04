/*El contexto (o alcance) de una función es por lo general, window. 
Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código,
es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.
Existen al menos tres maneras de cambiar el contexto de una función.

Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores */

const ronald = {
    nombre: 'Ronald' ,
    apellido: 'Garcia'
}

const pedro = {
    nombre: 'Pedro' ,
    apellido: 'Martinez'
}
functionsaludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}


// // const saludarAronald = saludar.bind(ronald)
// // const saludarApedro = saludar.bind(pedro)

// setTimeout(saludar.bind(ronald , 'Hola Che'), 1000)
// saludar.call(ronald, 'hola che') 
saludar.apply(ronald, ['hola che'])