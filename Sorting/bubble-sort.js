/**
 *
 * @param {[Number]} arr
 * @return {[Number]}
 */
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if(arr[i]>arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
  }

  return arr;
}

console.log(bubbleSort([5,4,3,2,1]))