/*Given array reverse entire array*/

function reverseArr(arr) {
  for (let i = 0, j = arr.length - 1; i < arr.length/2; i++, j--) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5, 6,7]));
