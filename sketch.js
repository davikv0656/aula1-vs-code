var caixa

function setup() {
  createCanvas(400,400);
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







