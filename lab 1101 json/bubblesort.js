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
  }

function getData(d1){
data = d1;
}






function draw(){
}

//bubblesort function
function bubbleSort() {

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
    console.log(data);
    console.log(millisecondStart + " start");
    console.log(millisecondEnd + " end");
    console.log(difference + " difference");
    console.log(swaps + " swaps");
    console.log(compares + " compares");
}
