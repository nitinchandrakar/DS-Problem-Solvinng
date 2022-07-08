/**
 * 
 *  Count ways to make sum of odd and even indexed elements equal by removing an array element
 * 
 * Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= n <= 105
-105 <= A[i] <= 105


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A=[2, 1, 6, 4]
Input 2:

A=[1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.
*/

function getSpecialIndex(A) {
  let N = A.length;
  let count = 0;
  let pfEven = [];
  let pfOdd = [];

  // find sum of even indexes
  pfEven[0] = A[0];
  for (let i = 1; i < N; i++) {
    if (i % 2 == 0) {
      pfEven[i] = pfEven[i - 1] + A[i];
    } else {
      pfEven[i] = pfEven[i - 1];
    }
  }

  // find sum of odd indexes
  pfOdd[0] = 0;
  for (let i = 1; i < N; i++) {
    if (i % 2 != 0) {
      pfOdd[i] = pfOdd[i - 1] + A[i];
    } else {
      pfOdd[i] = pfOdd[i - 1];
    }
  }

  for (let i = 0; i < N; i++) {
    let sumEven = pfOdd[N - 1] - pfOdd[i];
    if (i != 0) {
      sumEven = sumEven + pfEven[i - 1];
    }

    let sumOdd = pfEven[N - 1] - pfEven[i];
    if (i != 0) {
      sumOdd = sumOdd + pfOdd[i - 1];
    }

    if (sumEven == sumOdd) {
      count++;
    }
  }

  return count;
}

console.log(getSpecialIndex([1, 1, 1]))
console.log(getSpecialIndex([2, 1, 6, 4]))
