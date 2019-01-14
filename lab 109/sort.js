//becca weeks


function loadArray (size){
  var n = (floor(random (100)))
  return new Array(size).fill(0).map(function(n) {
}
}





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
  var swapCountBubbleSort = 0;
  var compareCountBubbleSort =0;
    for (var i = array.length-1; i>0; i--){
      for (var j = 0; j < i; j++){
        if (array[j] >array[j+1]){
          compareCountBubbleSort ++ ;
          swapCountBubbleSort ++;
          var temp = array[j];
          array[j] =array[j+1];
          array[j+1] = temp; //swap
        }
        else {
          compareCountBubbleSort ++
        }
        }
      }

    console.log (swapCountBubbleSort)
    console.log (compareCountBubbleSort)
  }

  function SelectionSort( array){
    var minIndex;
    var temp;
    var swapCountSelectionSort = 0;
    var compareCountSelectionSort = 0;
    for (var i < array.length; i++){
      minIndex = i;
      for (var j = i+1; j<array.length; j++){
        if (array [j] < array [minIndex]){
          minIndex = j;
          compareCountSelectionSort ++;
        }

      temp = array [i];
      array [i] = array [mindIndex];
      array [minIndex] = temp; //swap
      swapCountSelectionSort ++ ;
    }
    return array;
    else {
      compareCountSelectionSort ++
    }
  console.log (swapCountSelectionSort)
  console.log (compareCountSelectionSort)
    }
  }

    function InsertionSort (array){
      var swapCountInsertionSort;
      var compareCountInsertionSort;
      for (var i = 1; i <array.length; i++){
        for (var j = i; j>0; j--){
          if (array [j] < array [j-1] ){ //if index to right is greater than index to left
            var temp =   array [j] //swap
            array [j] =  array [j-1] // swap
            array [j-1] = temp; //swap
          }
      }
        }
      console.log (compareCountInsertionSort)
      console.log (swapCountInsertionSort)
      }
