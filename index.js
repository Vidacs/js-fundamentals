const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

function getCharacter(id, callback){
  return new Promise((resolve, rejected) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $
    .get(url, opts, function(data){
      resolve(data)
    })
    .fail(() => {
      rejected(id)
    });
  })
}

function onError(id){
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

getCharacter(4)
  .then((character) =>{
    console.log(`Hola, yo soy el personaje 4 ${character.name}`);
    return getCharacter(1);
  })
  .then((character) =>{
    console.log(`Hola, yo soy el personaje 1 ${character.name}`);
    return getCharacter(2);
  })
  .then((character) =>{
    console.log(`Hola, yo soy el personaje 2 ${character.name}`);
    return getCharacter(3);
  })
  .then((character) =>{
    console.log(`Hola, yo soy el personaje 3 ${character.name}`);
    return getCharacter(5);
  })
  .then((character) =>{
    console.log(`Hola, yo soy el personaje 5 ${character.name}`);
    return getCharacter(6);
  })
  .then((character) =>{
    console.log(`Hola, yo soy el personaje 6 ${character.name}`);
    return getCharacter(7);
  })
  .then((character) =>{
    console.log(`Hola, yo soy el personaje 7 ${character.name}`);
    return getCharacter(8);
  })
  .then((character) =>{
    console.log(`Hola, yo soy el personaje 8 ${character.name}`);
  })
  .catch(onError)

// Promesas
// valores que aun no conocemos cuando una funcion sincrona o asincrona
// se ejecute y se resuelva
//tienen 3 estados
//pending
//fullfilled - promesa resuelta
//rejected
// para obtener el valor de la promesa podemos llamar al valor .then
//podemos ejecutar multiples promesas despues del estado de 
//fullfilled