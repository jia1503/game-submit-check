class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // TA
  start() {
    background("white");

    player = new Player();
    playerCount = player.getCount();
    
    form = new Form();
    form.display();

    c1 = createSprite(width / 2 - 100, height - 100);
    c1.addAnimation("car1", c1Img);
    c1.scale = 1;

    c2 = createSprite(width / 2 + 50, height - 100);
    c2.addAnimation("car2", c2Img);
    c2.scale = 1;

    c3 = createSprite(width / 2 - 100, height - 100);
    c3.addAnimation("car1", c3Img);
    c3.scale = 1;

    c4 = createSprite(width / 2 + 50, height - 100);
    c4.addAnimation("car2", c4Img);
    c4.scale = 1;

    cars = [c1, c2,c3,c4];
  }
  handleElements() {
    form.hide();
    //form.titleImg.position(40, 50);
    //form.titleImg.class("gameTitleAfterEffect");
  }

  //SA
  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 4, width, height * 6);

      //index of the array
      var index = 0;
      var x=120;
      for (var plr in allPlayers) {
        //use data form the database to display the cars in x and y direction
        index = index + 1; 
         x=x+250;
        var y = height - allPlayers[plr].positionY;
       
        cars[index-1].position.x = x;
        cars[index-1].position.y = y;
       /* camera.position.x = (windowWidth-30)/2;
        camera.position.y = (allPlayers[plr].y)-300;
       */
        
        //add 1 to the index for every loop
        

        textSize(20);
        fill (0);
        text(allPlayers[plr].name ,x-18,y-150);

      }

      // handling keyboard events
      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }

     /* if(player.distance>3900){
        gameState = 2;
        player.rank +=1;
        Player.updateCarsAtTheEnd(player.rank);
      }*/

      drawSprites();
    }
  }
}