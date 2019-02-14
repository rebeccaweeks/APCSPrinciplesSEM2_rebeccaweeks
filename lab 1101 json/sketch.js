var data;
var compares = 0;
var swaps = 0;
var millisecondEnd;
var milliseondStart;
var difference;
var data;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 50);
  loadJSON("population2.json",getData);
    bubbleSort();
    console.log("Sorting hi");
    barGraph();
  }

function getData(d1){
data = d1;
}

function draw(){
}
