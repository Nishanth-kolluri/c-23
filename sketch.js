const mw = Matter.World;
const mb = Matter.Bodies;
const me = Matter.Engine;

var engine,world;
var water,ball,box1,box2;



function setup() {
  createCanvas(400,400);
  engine = me.create();
  world = engine.world;
  var Option = {
    isStatic: true
  }
  water = mb.rectangle(200,390,200,20,Option);
  mw.add(world,water);
  console.log(water);
  var o = {
    restitution: 1
  }
  ball = mb.circle(200,100,20,o);
  console.log(ball);
  box1 = new box(200,300,50,50);
  box2 = new box(200,100,50,100);
}
function draw() {
  background('pink');
  me.update(engine);
  rectMode(CENTER);
  //rect(200,200,50,50);
  rect(water.position.x,water.position.y,200,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  box1.display();
  box2.display();
}
