var caixa

function setup() {
  createCanvas(windowWidth,windowHeight);
caixa=createSprite(160,160,40,30)

console.log("game") 

}

function draw() 
{
  background(30);
drawSprites ()

if (keyDown("d")) {

caixa.x=caixa.x+4

}
if (keyDown("a")) {

  caixa.x=caixa.x-4

}




}







