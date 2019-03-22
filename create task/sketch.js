//rebecca weeks
//slider


function setup() {
  // create canvas
  createCanvas(800, 800);
  textSize(15);
  noStroke();
  background (0,0,0);
  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  radSlider = createSlider (0,255,0);
  radSlider.position (20,110);
//  opacitySlider = createSlider (0,255,0);
//  opacitySlider.position (20,140);

}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  const rad = radSlider.value();
  //const opacity = opacitySlider.value();
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
  text('radius', radSlider.x * 2 + radSlider.width, 125);
//  text('opacity', opacitySlider.x * 2 + opacitySlider.width, 155);
  fill (r,g,b,)//opacity);
  ellipse( 400,400,50 + rad, 50 +rad);

}

createCircles = function 
