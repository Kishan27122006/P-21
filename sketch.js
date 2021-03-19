var bullet,wall

function setup() {
  createCanvas(800,400);
  bullet=createSprite(400, 200, 50, 10);
  bullet.shapeColor="red"
  wall=createSprite(700, 200, 20, 400);
  wall.shapeColor="black"
  bullet.debug=true
  wall.debug=true
}

function draw() {
  background("yellow");  
  
  bullet.x=mouseX
  
  if(bullet.x-wall.x<80 ){
    bullet.shapeColor="black"
   
  }
  if(bullet.x-wall.x>-40){
    bullet.shapeColor="green"
  }
  else
  { bullet.shapeColor="blue"
   
  }
  if(wall.x-bullet.x<80 ){
    wall.shapeColor="balck"
   
  }
  if(wall.x-bullet.x>-40){
    wall.shapeColor="red"
  }
  else
  { wall.shapeColor="blue"
  
  }
  drawSprites();
}