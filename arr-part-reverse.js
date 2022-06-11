/*Given an array evlement and Si, Ei reverse array from Si to Ei note Si<=Ei, Reverse the part of the array*/

function partialReverseArr(arr, Si, Ei) {
  for (var i = Si, j = Ei; i < (Ei - Si); i++, j--) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

console.log(partialReverseArr([1, 2, 3, 4, 5,6, 7, 8, 9, 10], 2, 6));
