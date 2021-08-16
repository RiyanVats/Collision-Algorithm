var Fixedrectangle;
var Movingrectangle;


function setup() {
  createCanvas(800,400);
  Fixedrectangle = createSprite(400, 200, 50, 50);
  Movingrectangle = createSprite(200,200,50,50);
  Fixedrectangle.shapeColor = "Blue";
  Movingrectangle.shapeColor = "Red";
  Fixedrectangle.debug = true;
  Movingrectangle.debug = true;
}

function draw() {
  background(255,255,255);
  Movingrectangle.x = World.mouseX;
  Movingrectangle.y = World.mouseY;
  if(Movingrectangle.x - Fixedrectangle.x < Fixedrectangle.width/2 + Movingrectangle.width/2 &&
    Fixedrectangle.x - Movingrectangle.x < Fixedrectangle.width/2 + Movingrectangle.width/2 &&
    Movingrectangle.y - Fixedrectangle.y < Fixedrectangle.height/2 + Movingrectangle.height/2 &&
    Fixedrectangle.y - Movingrectangle.y < Fixedrectangle.height/2 + Movingrectangle.height/2) {
    Movingrectangle.shapeColor = "Green";
    Fixedrectangle.shapeColor = "Green";
  } 
  else {
    Fixedrectangle.shapeColor = "Blue";
    Movingrectangle.shapeColor = "Red";
  }
  drawSprites();
}