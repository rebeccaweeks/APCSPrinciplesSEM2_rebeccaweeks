// ball constructor function
// becca weeks


 function Ball(location, velocity, radius, col){
    this.loc = location;
    this.vel = velocity;
    this.acc = createVector(0,.1);
    this.rad = radius;
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
	   if (this!== ball){
       //  find distance between this and ball
       var d = this.loc.dist(ball.loc)
   	   if (d <450){
   		   var steeringForce = p5.Vector.sub(this.loc,ball.loc);
   		   steeringForce.normalize();  //  changes the magnitud to 1
   			steeringForce.mult(0.5);    //  scales the magnitude to 0.9
   			this.vel.add(steeringForce);
   	   }
   	   if (d < 80){
   		   var repForce = p5.Vector.sub(ball.loc, this.loc);
   		   repForce.normalize();
   		   repForce.mult(0.05);
   		   this.vel.add(this.repForce)
   	   }
	   //this.vel.limit (3);
      this.loc.add(this.vel)
     }




   }

   //checkEdges() reverses speed when  ball touches an edge
   this.checkEdges = function(){
      if(this.loc.x < 0) this.vel.x = -this.vel.x;
      if(this.loc.x > width) this.vel.x = -this.vel.x;
      if(this.loc.y < 0) this.vel.y = -this.vel.y;
      if(this.loc.y > height) this.vel.y = -this.vel.y;
   }

   // render() draws the ball at  new location
  this.render = function(){
     fill(this.col);
     stroke (10,1,1);
     line(this.loc.x, this.loc.y,balls[2].loc.x, balls[3].loc.y);
     stroke (110,200,215);
     line(this.loc.x +10, this.loc.y +200,balls[1].loc.x, balls[1].loc.y);
     stroke (0,0,215);
     line(this.loc.x +100, this.loc.y +300,balls[0].loc.x, balls[0].loc.y);
  }

}
