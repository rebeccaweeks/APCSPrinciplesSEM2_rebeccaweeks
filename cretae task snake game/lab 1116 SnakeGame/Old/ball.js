// ball constructor function
// becca weeks


function Ball(locX, locY, rad, col){
  // Instance variables
   this.locX = locX;
   this.locY = locY;
   this.speedX = random(-5.0, 5.0);
   this.speedY = random(-5.0, 5.0);
   this.rad = rad;
   this.col = col;
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // changes the location of the ball
  //  adds speed to x and y
   this.update = function(){
      this.locX = this.locX + this.speedX;
      this.locY = this.locY + this.speedY;
   }

   //checkEdges() reverses speed when  ball touches an edge
   this.checkEdges = function(){
      if(this.locX < 0) this.speedX = -this.speedX;
      if(this.locX > width) this.speedX = -this.speedX;
      if(this.locY < 0) this.speedY = -this.speedY;
      if(this.locY > height) this.speedY = -this.speedY;
   }

    // render() draws the ball at  new location
   this.render = function(){
      fill(this.col);
      ellipse(this.locX, this.locY, rad, rad);
   }
   
 }