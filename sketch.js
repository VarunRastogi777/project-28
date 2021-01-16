
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground
var playerimg,player
var stone
var tree
var chain
var mango,mango1,mango2,mango3,mango4

function preload()
{
	playerimg=loadImage("pictures/boy.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(500,650,1000,20)

	mango =new Mango(625,325,1)
	mango1=new Mango(700,225,1)
	mango2=new Mango(850,250,1)
	mango3=new Mango(750,325,1)
	mango4=new Mango(930,350,10)

	tree= new Tree()

	stone= new Stone()

	chain= new Chain(stone.body,{x:105,y:518});

	player= new Boy()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display()
  tree.display()
  mango.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  stone.display()
  player.display()
  chain.display()
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
function detectCollision(stone,mango){
	var distance=dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y)
	
	if(distance<=stone.r+mango.r){
		Matter.Body.setStatic(mango.body,false)
	}

}
function detectCollision(stone,mango1){
	var distance=dist(stone.body.position.x,stone.body.position.y,mango1.body.position.x,mango1.body.position.y)
	
	if(distance<=stone.r+mango1.r){
		Matter.Body.setStatic(mango1.body,false)
	}

}
function detectCollision(stone,mango2){
	var distance=dist(stone.body.position.x,stone.body.position.y,mango2.body.position.x,mango2.body.position.y)
	
	if(distance<=stone.r+mango2.r){
		Matter.Body.setStatic(mango2.body,false)
	}

}
function detectCollision(stone,mango3){
	var distance=dist(stone.body.position.x,stone.body.position.y,mango3.body.position.x,mango3.body.position.y)
	
	if(distance<=stone.r+mango3.r){
		Matter.Body.setStatic(mango3.body,false)
	}

}
function detectCollision(stone,mango4){
	var distance=dist(stone.body.position.x,stone.body.position.y,mango4.body.position.x,mango4.body.position.y)
	
	if(distance<=stone.r+mango4.r){
		Matter.Body.setStatic(mango4.body,false)
	}

}
function keyPressed(){
    if(keyCode === 32){
        chain.attach(stone.body);
    }
}


