function Sort (array){
var maxIndex;
var temp;
for (var i < array.length; i--){
  maxIndex = i;
  for (var j = i+1; j<array.length; j++){
    if (array [j] > array [minIndex]){ //find largest value
      maxIndex = j;
    }
  }
  temp = array [i];
  array [i] = array[maxIndex];
  array [maxIndex] = temp; //swap
}
return array;
}


function BubbleSort (array)
{
    for (var i = array.length-1; i>0; i--){
      for (var j = 0; j < i; j++){
        if (array[j] >array[j+1]){
          var temp = array[j];
          array[j] =array[j+1];
          array[j+1] = temp; //swap
        }
      }
    }
  }

  function SelectionSort( array){
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

    function InsertionSort (array){
      for (var i = 1; i <array.length; i++){
        for (var j = i; j>0; j--){
          if (array [j] < array [j-1] ){ //if index to right is greater than index to left
            var temp =   array [j] //swap
            array [j] =  array [j-1] // swap
            array [j-1] = temp; //swap
          }
      }
        }
      }
