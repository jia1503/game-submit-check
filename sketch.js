var canvas, backgroundImage;

var gameState;
var playerCount;
var allPlayers,players, identityPlayer,camera;
var database;
//var animations;
var reset;
var cars=[];
var form, player,playerCount, game, index=0, aRead1, aRead2, aRead3, aRead4, play, title, bg, reset, paper;
var  cw, cwImage, paperImg, roadImg, chest, c1, c1Img, c2, c2Img, c3, c3Img, c4, c4Img,advimg;

var backgroundImage, bgImg, track;

function preload(){
 // backgroundImage = loadImage("backgroundd.png");
  c1Img = loadAnimation( "c1/c1.0.png","c1/c1.1.png", "c1/c1.2.png", "c1/c1.3.png", "c1/c1.4.png", "c1/c1.5.png");
  c2Img = loadAnimation( "c2/c2.0.png","c2/c2.1.png", "c2/c2.2.png", "c2/c2.3.png", "c2/c2.4.png", "c2/c2.5.png");
  c3Img = loadAnimation( "c3/c3.0.png","c3/c3.1.png", "c3/c3.2.png", "c3/c3.3.png", "c3/c3.4.png", "c3/c3.5.png");
  c4Img = loadAnimation( "c4/c4.0.png","c4/c4.1.png", "c4/c4.2.png", "c4/c4.3.png", "c4/c4.4.png", "c4/c4.5.png");
  track = loadImage("road.png");
  chest = loadImage("chest.png");
  bg = loadImage("bg.png");
  paper = loadImage("paper.png");
  cwImage = loadImage("cw/cw0.png")
  
  
}


function setup() {
  canvas = createCanvas(windowWidth-30, windowHeight-35);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  
     
  background (paper);
  /*if (playerCount === 4 ) {
    game.update(1);
  }*/

 
  if (gameState === 1) {
    game.play();
  }

  /*if(gameState===0){
    background(paper, windowWidth/2, windowHeight/2, windowHeight, windowHeight );
  }*/
  console.log(windowWidth-30);
  
}

function windowResized() {
  resizeCanvas(windowWidth-30, windowHeight-35);
}
