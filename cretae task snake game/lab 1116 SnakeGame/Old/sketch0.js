
//  This is a comment
//  The setup function function is called once when your program begins

//var ball1;
var balls = [];


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 50, 250);
  loadBalls(5);

}

//  The draw function is called @ 30 fps
function draw() {
	for (var i = 0; i <= balls.length; i= +1){
		balls[5].run();
	}
}


	
/* for (var x = 0; x <= 5; x ++){

var ball1 = new Ball(random(width), random(height),random(15, 35), color(random, random, random))
 balls.push(ball1);
  ball1.run(); */



function loadBalls (numBalls){
	for (var i = 0; i <= numBalls; i++){
		var x = random(width)
		var y = random(height)
		var r = random(15, 35)
		color(random, random, random)
		//var b = new Ball(x, y,r, color(random, random, random))
		balls.push(new Ball (x, y,r, color(random, random, random)))
		//balls.push(b)
		

	
}

}
