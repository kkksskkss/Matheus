var ship,shipImg;
var sea,seaImg;
function preload(){
  seaImg = loadImage ("sea.png");
  shipImg = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png");
}

function setup() {
  createCanvas(400, 400);

  sea = createSprite(300,200,100,100);
  sea.addImage("mar", seaImg);
  sea.background;
  sea.scale = 0.25;

  ship = createSprite(150,150,50,50);
  ship.addAnimation("barco", shipImg);
  ship.scale = 0.2;
  
}

function draw() {
  background("blue");
   

    if(sea.x < 0){
      sea.x = sea.width/2;
    }
    ship.collide(sea);

    drawSprites();
  }

