const light_blue =  document.getElementById('light_blue');
const violet =  document.getElementById('violet');
const orange =  document.getElementById('orange');
const green =  document.getElementById('green');
const btnPlay = document.getElementById('btnPlay');
const lastLevel = 1;
class Game {
  constructor(){
    this.start = this.start.bind(this);
    this.start();
    this.sequenceGenerator();
    setTimeout(() => this.nextLevel());
  }

  start() {
    this.selectColor = this.selectColor.bind(this);
    this.toggleStartGame();
    this.level = 1;
    this.colors = [light_blue, violet, orange, green];
  }

  toggleStartGame(){
    if(btnPlay.classList.contains('hide')){
      btnPlay.classList.remove('hide');
    } else {
      btnPlay.classList.add('hide');

    }
  }

  sequenceGenerator(){
    this.sequence = new Array(lastLevel).fill(0).map( n => Math.floor(Math.random()*4));    
  }

  nextLevel(){
    this.subnivel = 0;
    this.lightSequence();
    this.clickEvent();
  }

  blinkColor(color){
    color.classList.add('light');
    setTimeout(() =>{
      color.classList.remove('light');
    }, 350);
  }

  lightSequence(){
    for(var i = 0; i < this.level; i++){
      const color = this.colors[this.sequence[i]];
      console.log(color);

      setTimeout( () => {
        this.blinkColor(color);
      },1000 * i);
    }
  }

  clickEvent(){
    this.colors[0].addEventListener('click', this.selectColor);
    this.colors[1].addEventListener('click', this.selectColor);
    this.colors[2].addEventListener('click', this.selectColor);
    this.colors[3].addEventListener('click', this.selectColor);
  }

  selectColor(ev){
    const colorName = ev.target.dataset.color;
    const colorNumber = this.transformColorToNumber(colorName);   
    const color = this.colors[colorNumber];

    this.blinkColor(color);

    if(colorNumber === this.sequence[this.subnivel]){
      this.subnivel++;
      if(this.subnivel === this.level){
        this.level++;
        this.deleteEventClick();
        if(this.level === (lastLevel + 1)){
            //gano
            this.winGame();
        } else {
         setTimeout( () => { this.nextLevel()}, 2000);
        }
      }
    } else {
      // perdio;
      this.lostGame();
    }
  }

  deleteEventClick(){
    this.colors[0].removeEventListener('click', this.selectColor);
    this.colors[1].removeEventListener('click', this.selectColor);
    this.colors[2].removeEventListener('click', this.selectColor);
    this.colors[3].removeEventListener('click', this.selectColor);
  }

  transformColorToNumber(color) {
    switch (color){
      case 'light_blue':
        return 0;
      case 'violet':
        return 1
      case 'orange':
        return 2;
      case 'green':
        return 3
    }
  }

  winGame(){
    swal("Good job!", "You clicked the button!", "success")
      .then( () => {
        this.start()}
        );
  }
  
  lostGame(){
    swal( "Oops" ,  "Something went wrong!" ,  "error" )
      .then(() => {
        this.deleteEventClick();
        this.start();
      });
  }
}

function newGame() {
  window.game = new Game();
}
