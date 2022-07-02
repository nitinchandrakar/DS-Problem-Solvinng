/*Given an array element rotate array from last to first by K times*/

function reversePartArr(arr, Si, Ei){
    for (var i = Si, j = Ei; i < j; i++, j--) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

function rotateArrKTerms(arr, k) {
  var N = arr.length;
  k = k%N;

  arr = reversePartArr(arr, 0, N-1);
  arr = reversePartArr(arr, 0, k-1);
  arr = reversePartArr(arr, k, N-1);

  return arr;
}
//3 4 5 1 2 
console.log(rotateArrKTerms([ 64, 78, 50, 25, 24, 27, 76, 59, 65, 41, 37, 6, 80, 61, 8, 48, 38, 85, 41, 18, 12, 81, 36, 37, 12, 44, 22, 65, 12, 33, 19, 42, 25, 30, 5, 4, 96, 81, 72, 71, 20, 20, 23, 85, 93, 33, 32, 30, 12, 97, 24, 13, 93, 58, 74, 37, 10, 46, 26, 21, 41, 92, 90, 21, 65, 35, 89, 26, 10, 14, 64, 28, 3, 80, 99, 62, 38, 55, 8, 92, 31, 93, 58, 77, 21, 34, 57, 49, 82, 85, 38, 89, 66, 51, 4, 31, 12, 33, 83, 29 ], 13));
