const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

function getCharacter(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

  $.get(url, opts, callback).fail(function(){
    console.log(`Sucedio un error, no se pudo obtener el parametro  id`);
    
  });
}

getCharacter(4,function(data){
  console.log(`Hola, yo soy ${data.name}`);

  getCharacter(5, function(data){

    console.log(`Hola, yo soy ${data.name}`);
    getCharacter(3, function(data){

      console.log(`Hola, yo soy ${data.name}`);

      getCharacter(1, function(data){
      
        console.log(`Hola, yo soy ${data.name}`);
  
      });    
    });  
  });
});
