var movingrectangle, fixedrectangle;

function setup() {
  createCanvas(1600,1600);
  movingrectangle=createSprite(600,200,80,20);
  fixedrectangle=createSprite(400,200,20,80);
  movingrectangle.shapeColor= "green";
  fixedrectangle.shapeColor= "green";
}

function draw() {
  background(0); 
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
  if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2 + movingrectangle.width/2
    &&fixedrectangle.x-movingrectangle.x<movingrectangle.width/2 + fixedrectangle.width/2
    &&movingrectangle.y-fixedrectangle.y<fixedrectangle.width/2 + movingrectangle.width/2
    &&fixedrectangle.y-movingrectangle.y<fixedrectangle.width/2 + movingrectangle.width/2){
  movingrectangle.shapeColor= "red";
  fixedrectangle.shapeColor= "red";
  }
  else{
  movingrectangle.shapeColor= "green";
  fixedrectangle.shapeColor= "green";
  }
  drawSprites();
}