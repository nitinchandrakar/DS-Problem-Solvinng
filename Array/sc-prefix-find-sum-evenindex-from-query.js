/**
 * Given an array element and Q queries. For each query get sum of all even index elements in given range
 */

function getEvenIndexSum(arr, query) {
  let prefixEven = [];
  let N = arr.length;
  let L = query[0];
  let R = query[1];
  prefixEven[0] = arr[0];

  for (let i = 1; i < N; i++) {
    if (i % 2 == 0) {
      prefixEven[i] = prefixEven[i - 1] + arr[i];
    } else {
      prefixEven[i] = prefixEven[i - 1];
    }
  }

  if (L == 0) {
    return prefixEven[R];
  } else {
    return prefixEven[R] - prefixEven[L - 1];
  }
}

console.log(getEvenIndexSum([3, 2, 1, 6, -3, 2, 8, 4, 9], [2, 5]));
