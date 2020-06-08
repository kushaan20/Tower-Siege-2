const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var ground
var circle, slingShot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(460,100,70,70);
    box2 = new Box(530,320,70,70);
    box3 = new Box(460,320,70,70);
    box4 = new Box(390,320,70,70);
    box5 = new Box(600,320,70,70);
    box6 = new Box(530,320,70,70);
    box7 = new Box(460,320,70,70);
    box8 = new Box(390,320,70,70);
    box9 = new Box(320,320,70,70);

    circle= new Circle(200,300,20)
  
    slingshot = new SlingShot(circle.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ground.display();
    circle.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attatch(circle.body);
    }
}