function Sort (array){
var minIndex;
var temp;
for (var i < array.length; i++){
  minIndex = i;
  for (var j = i+1; j<array.length; j++){
    if (array [j] < array [minIndex]){
      minIndex = j;
    }
  }
  temp = array [i];
  array [i] = array [mindIndex];
  array [minIndex] = temp; //swap
}
return array;
    }
