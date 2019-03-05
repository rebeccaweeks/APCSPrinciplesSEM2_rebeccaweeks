
//  This is a comment
//  The setup function function is called once when your program begins

var ball;
var balls = [];


function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 0, 50);
  ball = new Ball (createVector (width/2,height/2), createVector (0,0), 65, color(255));
  loadBalls(48);

}

//  The draw function is called @ 30 fps
function draw() {

  background(50, 0, 50);
  ball.run();
  for (var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}


function loadBalls (numBalls){
  for (var i = 0; i < numBalls; i++){
    var v1 = createVector(random(width), random(height));
    var v2 = createVector(random(-2,2), random(-2,2));
    var rad = random(15, 35)
    var col = color(random(255), random(255), random(255))
	var ball = (new Ball (v1, v2,rad, col))
	balls.push(new Ball (v1, v2,rad, col));
  }

}
