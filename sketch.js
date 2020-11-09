
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(100,300,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(300,340,600,10);
  ground.velocityx=-3;
  ground.x=ground.width/2;
  FoodGroup=new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background(250);
  
    if(keyDown("space")){
    monkey.velocityY = -10;
    }
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
monkey.collide(ground);
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  Food();
drawSprites();
  
}

function Food(){
  if (frameCount % 100 === 0){
     monkey.y = Math.round(random(120,200));
  banana=createSprite(400,200,20,20);
  banana.addImage(bananaImage);
    monkey.y = Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX=-3;
     banana.lifetime = 134;
    
    banana.depth =  monkey.depth
    monkey.depth =  monkey.depth + 1;
    FoodGroup.add(banana);
  }
    
}

function Obstacle(){
  if (frameCount % 300 === 0){
    var rand = Math.round(random(340,350));
  obstacle= createSprite(400,165,10,40);
  obstacle.addImage(  obstacleImage);    
    obstacle.velocityX = -6;
    
  }
  
}