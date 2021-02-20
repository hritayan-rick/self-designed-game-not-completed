var bg1;
var backDrop;
var soldier , soldier1;
var edges;
var mon1 , mon2 ,  monsterSprite;
var monGroup;
var coinGroup , coinSprite , coinImage;
var fireballGroup , fireballImage , fireballSprite;
var gameState = "serve";



function preload(){
  bg1 = loadImage("image/background.jpg");
  soldier1 = loadImage("image/soldier.png")
  mon1 = loadImage("image/mon1.png")
  mon2 = loadImage("image/mon2.png")
  coinImage = loadImage("image/coin.png")
  fireballImage = loadImage("image/fireball.png")
}
function setup(){
  createCanvas(1200 , 900);
  backDrop  = createSprite(400 , 400 , 60,  90);
  backDrop.addImage(bg1)
  backDrop.scale = 0.87;

  soldier = createSprite(50 , 450 , 60 , 80 );
  soldier.addImage(soldier1);
  soldier.scale = 0.34;

  edges = createEdgeSprites();

 monGroup = new Group();
 coinGroup = new Group();
 fireballGroup = new Group();
}
function draw(){
  background(0)
  drawSprites();
  if(gameState ==="serve"){
   
    intropage();

  }
  if(gameState ==="serve" && keyDown("s")){
    gameState = "play"
  }
  if(gameState ==="play" ){
    backDrop.visible = true;
    soldier.visible = true;
    if(keyDown(UP_ARROW)){
      soldier.y = soldier.y-5;
    }
    if(keyDown(DOWN_ARROW)){
      soldier.y = soldier.y+5;
    }
    if(keyDown(RIGHT_ARROW)){
      soldier.x = soldier.x+5;
    }

    if(keyDown(LEFT_ARROW)){
      soldier.x = soldier.x-5;
    }
    soldier.bounceOff(edges);

    spawnMonster();
    spawnCoin();
    spawnfireball();
  }
    
    

}
function spawnMonster(){
  if(frameCount % 180 === 0){
     monsterSprite =  createSprite(1220 , 200 , 34 , 87);
     monsterSprite.y = Math.round(random(150 , 750));
     monsterSprite.velocityX =-4; 
     monsterSprite.scale = 0.4;

     var mon = Math.round(random(1 , 2));
     switch(mon){
       case 1:monsterSprite.addImage(mon1);
       break;
       case 2:monsterSprite.addImage(mon2);
       break;
       default:break;
     }
     monsterSprite.lifetime = 430;
      monGroup.add(monsterSprite);
  }
  
}

function spawnCoin(){
  if(frameCount % 200 === 0){
     coinSprite =  createSprite(1220 , -10 , 34 , 87);
     coinSprite.addImage(coinImage);

  
     coinSprite.x = Math.round(random(150 , 1050));

     coinSprite.velocityY =+4; 
     coinSprite.scale = 0.2;

     
    
     coinSprite.lifetime = 300;
      coinGroup.add(coinSprite);
  }
  
}
function spawnfireball(){
  if(frameCount % 250 === 0){
     fireballSprite =  createSprite(1220 , 100 , 34 , 87);
     fireballSprite.addImage(fireballImage);
    
    var rand =  Math.round(random(150 , 1050));
  
     fireballSprite.y = rand;

     fireballSprite.velocityX =-4; 
     fireballSprite.scale = 0.5;

     
    
     fireballSprite.lifetime = 430;
      fireballGroup.add(fireballSprite);
  }
  
}
function intropage(){
  backDrop.visible = false;
  soldier.visible = false;
 
  fill("yellow");
  textSize(30);
  text("MONsteRr KiLLeR");
  text("PrEsS 'S' To StArT");
}








