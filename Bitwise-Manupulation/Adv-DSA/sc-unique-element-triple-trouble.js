/**
 * Given array element arr[N], every element repeats thrice except 1 find the unique element
 *
 * constarints :  1< N <= 10^6
 *                1 <= arr[i] <= 10^9
 *
 */

var checkSetBit = function (value, pos) {
  return ((value >> pos) & 1) == 1;
};
var trippleTrouble = function (arr) {
  let unique = 0;
  for (let i = 0; i < 32; i++) {
    let setBitCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (checkSetBit(arr[j], i)) {
        setBitCount = setBitCount + 1;
      }
    }
    unique = unique + (1 << i) * (setBitCount % 3);
  }

  return unique;
};

console.log(trippleTrouble([5, 7, 5, 4, 7, 11, 11, 9, 11, 7, 5, 4, 4]));
