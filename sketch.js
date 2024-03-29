var car,wall;
var speed,weight;

function setup() {
  createCanvas(1500,400);
 car= createSprite(500, 200, 50, 50);
 car.velocityX = 190;
 
 car.shapeColor=color(255);
  speed=random(55,90);
  weight=random(400,1500);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,70,80);

  
}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  } 
  drawSprites();
}