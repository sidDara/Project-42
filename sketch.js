const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;

var thunder;
var thunderstream1,thunderstream2,thunderstream3,thunderstream4,thunderFrame;

var maxDrops=100;
var drops=[];

function preload(){
    thunderstream1=loadImage("Images/thunderbolt/1.png");
    thunderstream2=loadImage("Images/thunderbolt/2.png");
    thunderstream3=loadImage("Images/thunderbolt/3.png");
    thunderstream4=loadImage("Images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500,600);
	rectMode(CENTER);


	engine = Engine.create();
    world = engine.world;

    umbrella=new Umbrella(200,400);

    if(frameCount%60===0){
    for(var i=0; i<maxDrops; i++){
       drops.push(new Drops(random(0,400), random(0,400)));
      }
   }
}

function draw(){
    background(0);
    Engine.update(engine);

    var rand=Math.round(random(1,4));

    if(frameCount%80===0){
        thunderFrame=frameCount;
        thunder=createSprite(random(10,450),random(10,10),10,30);
    switch(rand) {
        case 1: thunder.addImage(thunderstream1);
                break;
        case 2: thunder.addImage(thunderstream2);
                break;
        case 3: thunder.addImage(thunderstream3);
                break;
        case 4: thunder.addImage(thunderstream4);
                break;
                      default: break;
    }

    thunder.scale=random(0.4,0.7);
}

if(thunderFrame + 10 === frameCount && thunder){
    thunder.destroy(); 
}

for(var i=0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
}
    umbrella.display();
    drawSprites();
    
}   