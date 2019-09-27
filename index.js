const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

function getCharacter(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

  $.get(url, opts,function(data){
    console.log(`Hola, yo soy ${data.name}`);

    if(callback){
      callback();
    }
  });
}

getCharacter(4,function(){
  getCharacter(5, function(){
    getCharacter(3, function(){
      getCharacter(1);    
    });  
  });
});
