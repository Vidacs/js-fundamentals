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
  .then((data) =>{
    console.log(`Hola, yo soy el personaje 4 ${data.name}`);
    return getCharacter(1);
  })
  .then((data) =>{
    console.log(`Hola, yo soy el personaje 1 ${data.name}`);
    return getCharacter(2);
  })
  .then((data) =>{
    console.log(`Hola, yo soy el personaje 2 ${data.name}`);
    return getCharacter(3);
  })
  .then((data) =>{
    console.log(`Hola, yo soy el personaje 3 ${data.name}`);
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