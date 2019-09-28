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

// const arrMod = (id) => getCharacter(id);


async function getPromisesCharacters(){
  var ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  var promises = ids.map((id) => getCharacter(id));

  try {
    var characters = await Promise.all(promises);
    console.log(characters);

  } catch (onError) {
    
  }
}

getPromisesCharacters();

// getCharacter(4)
//   .then((character) =>{
//     console.log(`Hola, yo soy el personaje 4 ${character.name}`);
//     return getCharacter(1);
//   })
//   .then((character) =>{
//     console.log(`Hola, yo soy el personaje 1 ${character.name}`);
//     return getCharacter(2);
//   })
//   .then((character) =>{
//     console.log(`Hola, yo soy el personaje 2 ${character.name}`);
//     return getCharacter(3);
//   })
//   .then((character) =>{
//     console.log(`Hola, yo soy el personaje 3 ${character.name}`);
//     return getCharacter(5);
//   })
//   .then((character) =>{
//     console.log(`Hola, yo soy el personaje 5 ${character.name}`);
//     return getCharacter(6);
//   })
//   .then((character) =>{
//     console.log(`Hola, yo soy el personaje 6 ${character.name}`);
//     return getCharacter(7);
//   })
//   .then((character) =>{
//     console.log(`Hola, yo soy el personaje 7 ${character.name}`);
//     return getCharacter(8);
//   })
//   .then((character) =>{
//     console.log(`Hola, yo soy el personaje 8 ${character.name}`);
//   })
//   .catch(onError)
