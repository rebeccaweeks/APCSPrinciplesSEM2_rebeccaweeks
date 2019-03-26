// ball constructor function
// becca weeks

var w = 20;

function Snake() {
  this.x = cols()/2 * scl;
  this.y = rows()/2 * scl;
  this.xspeed = -1;
  this.yspeed = 0;
  this.segment = [];
  this.score = 0;
 this.timeRemaining = 15;




  this.dir = function(x, y) {
    if (x != 0 && this.xspeed != x * (-1)
        || y != 0 && this.yspeed != y * (-1)) {
      this.xspeed = x;
      this.yspeed = y;
    }
  }

  this.eat = function(food) { // function call = eat food, score increases by one point, create segment vector
    if (this.x === food.x() && this.y === food.y()) {
      food.eaten();
      this.score+= 1;
    this.timeRemaining = 15;
      this.segment.push(createVector(this.x, this.y));
      this.eat (food,1);

    }
  }

  this.move = function() {
    // put last square of tail in front of the line
    if (this.segment.length > 0) {
      var endOfSegment = this.segment.pop();
      endOfSegment.x = this.x;
      endOfSegment.y = this.y;
      this.segment.unshift(endOfSegment);
    }

    // move head
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

    // wrap around right and bottom edges

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);

    // wrap around left and top edges
    if (this.x < 20) {
      this.x = constrain(this.x, 0, width-scl);
      //  noLoop();
    gameState = 3;
      this.gameOver();

      //noLoop();
    }
    if (this.y < 20) {
      this.y = constrain(this.y, 0, width-scl);
        //noLoop();
      gameState = 3;
      this.gameOver();
    //  noLoop()


    }
    if (this.x >779) {
    //  noLoop();
      gameState = 3;
      this.gameOver();
    //  noLoop()
  }
  if (this.y >779) {
  //  noLoop();
    gameState = 3;
    this.gameOver();
    //noLoop()
  }
}


  this.draw = function() {
    fill(0,0,255);
    rect(this.x, this.y, scl, scl);
    for(var i = 0; i < this.segment.length; i++) {
      rect(this.segment[i].x,
          this.segment[i].y,
          scl, scl);

  }
  }
  this.gameOver = function (){
  //  gameState = 3;
  textFont()
  fill (0,0,0);
  rect (175,330,430,200);
//  fill (97, 199, 221);
  //rect (240, 315, 320, 170);
  fill (255,255,255);
  textAlign (CENTER);
  textSize (25);
  text ("GAME OVER!Your high score was: " + snake.score, 400,425);

      noLoop();
      score = 0;

      //click to play again

  }
  this.collision= function (){
    for (var i = 0; i< this.segment.length-1; i++){
      if (this.segment[0].x == this.segment[i+1].x && this.segment[0].y == this.segment[i+1].y) { //die of hit wall //list all possible wal collisions{
       noLoop();
        this.gameOver();
      }
    }
  }
  this.timer = function () {

      if (frameCount % 10 == 0 && this.timeRemaining > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        this.timeRemaining --;
      }
      if (this.timeRemaining == 0) {
        gameState = 3;
        this.gameOver();

      }

  }

  }
