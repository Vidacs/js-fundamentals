const light_blue =  document.getElementById('light_blue');
const violet =  document.getElementById('violet');
const orange =  document.getElementById('orange');
const green =  document.getElementById('green');
const btnPlay = document.getElementById('btnPlay');
const lastLevel = 5;

class Message {
  	constructor(){}

  	async showMessageFirstLevel(){
    	Swal.fire({
		title: 'Nivel 1!',
		text: 'Que comience el juego',
		imageUrl: 'images/play.gif',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
		animation: false
		})
	}

  async showGameOver(level) {
    return Swal.fire({
        title: `Game over`,
        text: `Lo sentimos has perdido en el nivel ${level}`,
        imageUrl: 'images/game_over.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        allowOutsideClick: false
    })
  }

  async showNextLevel(level) {
    return Swal.fire({
        title: `Has completado el nivel ${level - 1} `,
        text: `Preparate para el nivel ${level}`,
        imageUrl: 'images/next_level.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        allowOutsideClick: false
    })
  }

  async showWinner() {
    return Swal.fire({
        title: `Felicidades`,
        text: `Has ganado el juego`,
        imageUrl: 'images/win.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        allowOutsideClick: false
    })
  }
}

class Game extends Message {
	constructor(){
		super();
		this.lastLevel = lastLevel;
		this.level = 0;
		this.subnivel = 0;
		this.currentPatron = 0
		this.colors = [
			light_blue, 
			violet, 
			orange, 
			green
		];
		this.start = this.start.bind(this);
		this.selectColor = this.selectColor.bind(this);
		this.nextLevel = this.nextLevel.bind(this);
		this.lightSequence = this.lightSequence.bind(this);
		this.toggleStartGame();
		this.start();
	}

	start() {
		this.sequenceGenerator();
		this.nextLevel();
	}

	toggleStartGame(){
		if(btnPlay.classList.contains('hide')){
		btnPlay.classList.remove('hide');
		} else {
		btnPlay.classList.add('hide');
		}
	}

	sequenceGenerator(){
		this.sequence = new Array(lastLevel)
		.fill(0)
		.map( n => Math.floor(Math.random()*4));    
	}
  
	nextLevel(){
		this.level++;
		this.currentPatron = 0
		if(this.level == 1){
		this.showMessageFirstLevel()
			.then(response => {
				setTimeout(this.lightSequence, 800)
			})
			this.enableClickEvent();
		}
		else{
			this.showNextLevel(this.level).then(response => {
				setTimeout(this.lightSequence, 800)
			})
			this.enableClickEvent();
		}
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

	selectColor(event){
		const colorName = event.target.dataset.color;
		const colorNumber = this.transformColorToNumber(colorName);   
		const color = this.colors[colorNumber];
		this.blinkColor(color);

		if(colorNumber === this.sequence[this.subnivel]){
			this.subnivel++;
			if(this.subnivel === this.level){
				this.deleteEventClick();
				if(this.level === lastLevel){
					//gano
					this.winGame();
				} else {
				setTimeout(this.nextLevel(),1500);
				}
			}
		}
		else {
			// perdio;
			this.lostGame();
		}
	}


	enableClickEvent(){
		this.colors[0].addEventListener('click', this.selectColor);
		this.colors[1].addEventListener('click', this.selectColor);
		this.colors[2].addEventListener('click', this.selectColor);
		this.colors[3].addEventListener('click', this.selectColor);
	}

    deleteEventClick(){
		this.colors[0].removeEventListener('click', this.selectColor);
		this.colors[1].removeEventListener('click', this.selectColor);
		this.colors[2].removeEventListener('click', this.selectColor);
		this.colors[3].removeEventListener('click', this.selectColor);
	}
	
	getColorByNumber(number) {
        switch (number) {
            case 0:
                return 'blue'
            case 1:
                return 'purple'
            case 2:
                return 'orange'
            case 3:
                return 'green'
        }
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
		this.showWinner().then(btnPlay.classList.remove('hide'))
	}
  
	lostGame(){
		this.deleteEventClick();
		this.showGameOver(this.level).then(
			btnPlay.classList.remove('hide')
		)
	}
}

function startGame() {
  window.game = new Game();
}