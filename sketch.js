var town;

function preload(){
  town = loadImage("snow3.jpg");
  snow1 = loadImage("snow4.webp");
  snow2 = loadImage("snow5.webp");

}

function setup() {
  createCanvas(1200,600);
}

function draw() {
  background(town);

  snow();

  drawSprites();
}

function snow(){
  if(frameCount % 30 === 0){
    s = createSprite(400, 200, 50, 50);
    s.y = 0;
    s.x = random(10,1180);
    s.scale = 0.1;
    var num = Math.round(random(1,2));
    
    if(num === 1){
      s.addImage(snow1);

    }

    if(num === 2){
      s.addImage(snow2);

    }

    s.velocityY = 3;

  }
}