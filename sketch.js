const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var packageBody,ground1,ground,dustbin1,dustbin2,dustbin3,dustbin4,paper,
launcher;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground1);


	 ground = new Ground(600,height,1200,20);
	 dustbin1 = new Dustbin(1100,height-20,200,20);
	 
	 paper = new Paper(200,450,40);
     launcher = new Launcher(paper.body,{x:200, y:100});
	Engine.run(engine);

	  
	
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  //dustbin4.display();
  launcher.display();    
  //keyPressed();
  drawSprites();
}
/*function keyPressed() {
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
		
	}
	
}*/
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}