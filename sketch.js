const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper1,binBottom,binLeft,binRight,ground;
var options;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(width/10 , 300);
	World.add(world,paper1);

	binBottom = new Bin(710, 620, 80, 20);
	World.add(world,binBottom);

	binLeft = new Bin(660, 590, 20, 80);
	World.add(world,binLeft);

	binRight = new Bin(760, 590, 20, 80);
	World.add(world,binRight);

	ground = Bodies.rectangle(width/2,690,width,100,{isStatic:true});
	World.add(world,ground);
}


function draw() {
	background(255);
	Engine.update(engine);

	fill(0);
	rectMode(CENTER);
	rect(width/2,680,width,100);
	fill("green");
	paper1.display();
	binBottom.display();
	binLeft.display();
	binRight.display();
}

function keyPressed() {
	if(keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-55})
	}
}