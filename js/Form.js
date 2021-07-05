class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    //this.titleImg = createImg("lop.png", "game title");
    this.greeting = createElement("h2");
    this.play = createButton("Continue to play");
    this.title = createElement('h2')
    this.title.html("The Shadows Of The Enchanted Jungle");
    this.reset = createButton("RESET");
  }

  setElementsPosition() {
    //this.titleImg.position(50, 20);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2-50, height / 2 - 20);
    this.greeting.position(width / 2 - 400, height / 2 - 250);
    this.reset.position(1400,100);
    this.title.position(width/2-200, 100);
  }

  setElementsStyle() {
    //this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    
  }

  //BP
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.title.hide();
    this.play.hide();
    //this.titleImg.hide();
   
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
     this.title.hide();
      //background ("paper.png");
    
     
      var message = `
      Greetings ${this.input.value()},
      </br> Now that you are here, I am the only one that can help you escape
      </br> this enchanted jungle but I must say it will come at a price.
      </br> You are my slave and will be if you don't get me the enchanted
      </br> jewel that helps lift my curse.
      </br>
      </br> Things to remember:
      </br> -Using the arrow keys will help you move.
      </br> -Collecting gems will increase your speed.
      </br> -Getting hit by obstacles will decrease your speed.
      </br> -You have 3 lives, getting hit by a monster will make you lose a life.
      </br> -After all the lives are exhausted, it's game over for you.
      </br> -To win reach the treasure box which contains the jewel first.
      </br>
      </br> But this task isn't easy, you will face a lot of difficulties.
      </br> Wait for 4 players to join, when any one player clicks the 'Continue to play' button, the game will start 
      </br> for all of you.`
      this.greeting.html(message);
    
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      this.play.position(1200, 600);
      player.addPlayer();
      player.updateCount(playerCount); // BP
      player.getDistance(); //BP
    });
  }

  handleMousePressedPlay(){
    this.play.mousePressed(() => {
      if(playerCount===4){ 
        game.update(1);
        this.title.hide();
      }
    
      this.play.hide();
    });
}

handleMousePressedReset(){
  this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      
  })
}




  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.handleMousePressedPlay()
    this.handleMousePressedReset();

    
  }
}