
//  This is a comment
//  The setup function function is called once when your program begins

//  This is a comment
//  The setup function function is called once when your program begins

//var ball1;
var scl = 20;
var snake;
var food;
var gameState ; //
var timeRemaining;

//var score = 0;


function setup() {
  createCanvas(800, 800);
  textAlign (CENTER,CENTER)
  snake = new Snake();
  food  = new Food();
  frameRate(10);
 snake = new Snake(createVector(width/2, height/2), createVector(1,0));
  gameState = 1;


}

function draw() {
  background(223, 178, 232);






if(gameState === 1){
  startGame();

}else if (gameState === 2){
  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();
  snake.collision();
  snake.timer();
  text ("score =" + snake.score, 0,200,150);
  text ("time remaining: " + snake.timeRemaining, 0,100,200);
  noStroke()
}else if(gameState === 3){
endGame()
}else{


}




}


function keyPressed() {
  if (keyCode === 38) { //moves down
    snake.dir(0, -1);
    gameState = 2;
  } else if (keyCode === 40) { //moves up
    snake.dir(0, 1);
      gameState = 2;
  } else if (keyCode === 39) { // moves right
    snake.dir(1, 0);
gameState = 2;
  } else if (keyCode === 37) { //moves left
    snake.dir(-1, 0);
      gameState = 2;
  }
}

function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}

function startGame(){
  //cretae rectangle

    textFont()
    fill (0,0,0);
    rect (225,330,330,200);
    fill (120,139,19);
    rect (240, 315, 320, 170);
    fill (0,0,0);
    textAlign (CENTER);
    textSize (20);
    text ("Welcome to the Snake Game", 400,400);
  //  textSize(20);
  //  text( "time remaining" + timer, 400,600,);

  //    rect(this.x(), this.y(), 50, 50);
    //  text ("welcome to the snake game. Use arrow keys to move around and collect the food")
    //create rectangle
  }

  function endGame(){
    snake.gameOver();


  }
