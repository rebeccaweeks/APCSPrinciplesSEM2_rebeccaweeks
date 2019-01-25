
var data;
var barHeight;
//  preload a large file
//function preload(){
//  data = loadJSON("population.json");
//}
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 50);
  loadJSON("population2.json",getData);
  if(data){
    bubbleSort();
  }

}

function getData(jData){
  data = jData;
  console.log(data);
}


function draw (){
  background(20);
  stroke(255);
  fill(255);

  if (data) {
    console.log("Wazzup");
    data.population[3].females
    text(data.countrydata[2].males, 50, 50);
    text("Hello Becca", 50, 50);
  }
}


function bubbleSort (){
  console.log("sorting");
  var d = data.countrydata
  for (var i = d.length-1; i>0; i--){
    for (var j = 0; j < i; j++){
      if (d[j].females >d[j+1].females){
        var temp = d[j];
        d[j] =d[j+1];
        d[j+1] = temp; //swap
      }
    }
  }
}
