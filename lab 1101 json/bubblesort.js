//global variables
//measurements
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
