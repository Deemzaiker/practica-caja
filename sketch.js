var box;
function setup() {

  createCanvas(600,600);
  box=createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW)) {
    box.position.x=box.position.x+5;

  }
  if (keyDown(LEFT_ARROW)) {
    box.position.x=box.position.x-5;
    
  }
  if (keyDown(UP_ARROW)) {
    box.position.y=box.position.y-5;

  }
  if (kyDown(DOW_ARROW)) {
    box.position.y=box.position.y+5;
    
  }
drawSprites();
}




