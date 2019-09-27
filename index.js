const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

const onResponse = function(data){
    console.log(`Hola, yo soy ${data.name}`);
}

function getCharacter(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

  $.get(url, opts, onResponse);
}

getCharacter(4);
getCharacter(5);
getCharacter(1);