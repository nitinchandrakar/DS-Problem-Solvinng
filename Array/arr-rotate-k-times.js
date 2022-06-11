/*Given an array element rotate array from last to first by K times*/

function reversePartArr(arr, Si, Ei){
    for (var i = Si, j = Ei; i < Ei-Si; i++, j--) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

function rotateArrKTerms(arr, k) {
  var N = arr.length;
  k = k%N;

  for (var i = 0, j = N - 1; i < N / 2; i++,j--) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }

  console.log(arr);

  arr = reversePartArr(arr, 0, k-1);
  arr = reversePartArr(arr, k, N-1);

  return arr;
}

console.log(rotateArrKTerms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
