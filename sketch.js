var PLAY = 1
var END = 0
var gameState = PLAY

var mario,mario_img
var ground,ground_img
var enemy,enemy_group,enemy_img
var score


function preload(){
 
    mario_img = loadImage("mario.png")
    ground_img = loadImage("ground.png")
    enemy_img = loadImage("enemy.png")

}   

function setup() {
    createCanvas("600,200")
    mario = createSprite("50,160,20,20")
    mario.addImage("run",mario_img)

    ground = createSprite(200,180,400,20);
    ground.addImage("ground",ground_img);
    ground.x = ground.width /2;
}



function draw() {
    background("white")

    text("Score: "+ score, 500,50);

    if(gameState === PLAY){

        ground.velocityX = -4

        if (ground.x < 0){
            ground.x = ground.width/2;
          }
        
        if(keyDown("space")){
            mario.velocityY = -12
        } 
        
        mario.velocityY = mario.velocityY + 0.8
        
        spawnEnemies()
        
        if(enemy_group.isTouching(mario)){
            gameState = END
        }
    }
    else if(gameState === END){
        
        mario.velocityY = 0
        ground.velocityX = 0

        enemy_group.setVelocityXEach(0)
    }
    drawSprites()
}

 function spawnEnemies(){
   if(frameCount % 60 === 0){
    enemy = createSprite(400,180,20,20)
    enemy.addImage("obstacle",enemy_group)
    enemy.velocityX = -4

    enemy_group.add(enemy)
   }
}