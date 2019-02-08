//global variables
//measurements
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




function barGraph(){

console.log("Sorting bar graph");
    //var data = [105, 212, 158, 31, 98, 54]; //change
    var width = 200, // canvas width and height
        height = 350,
        margin = 20,
        w = width - 2 * margin, // chart area width and height
        h = height - 2 * margin;

    var barWidth =  (h / data.countrydata.length) * 0.8; // width of bar
    var barMargin = (h / data.countrydata.length) * 0.2; // margin between two bars

    createCanvas(width, height);

    textSize(14);

    push();
    translate(margin, margin); // ignore margin area

    for(var i=0; i<data.countrydata.length; i++) {
      push();
      fill('steelblue');
      noStroke();
      translate(0, i* (barWidth + barMargin)); // jump to the top right corner of the bar
      rect(0, 0, data.countrydata[i].females, barWidth); // draw rect

      fill('#FFF');
      text(data.countrydata[i].females + data.countrydata[i], 5, barWidth/2 + 5); // write data

      pop();
    }

    pop();
  }



function draw(){
}

//bubblesort function
function bubbleSort() {
  console.log("begin")
  millisecondStart = millis();
  var length = data.countrydata.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            var a = data.countrydata[j].females;
            var b = data.countrydata[j+1].females;
            compares++;
            if(a > b) {
                var temp = data.countrydata[j];
                data.countrydata[j] = data.countrydata[j+1];
                data.countrydata[j+1] = temp;
                swaps++;
            }
        }
    }
    millisecondEnd = millis();
    difference = millisecondEnd - millisecondStart;
    console.log("Sorting finished");
    console.log(data);
    console.log(millisecondStart + " start");
    console.log(millisecondEnd + " end");
    console.log(difference + " difference");
    console.log(swaps + " swaps");
    console.log(compares + " compares");
}
