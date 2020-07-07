var paper;
var ground;
var log1,log2,log3;
var paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,50,35);
	 ground = new Ground(800,770,1600,20);

	 log1 = new Dustbin(1100,750,200,40);
	 log2 = new Dustbin(1000,650,40,200);
	 log3 = new Dustbin(1200,650,40,200);

	Engine.run(engine);
  
}

function draw() {
  background(0);

Engine.update(engine);

paper.display(); 
    ground.display();

    log1.display();
    log2.display();
    log3.display();

   // keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body , paper.position,{x:88 , y:-88});
	}
}