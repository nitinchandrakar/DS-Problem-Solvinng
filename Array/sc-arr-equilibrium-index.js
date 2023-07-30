/**
 * 
 * Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

NOTE:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.



Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105


Input Format
First arugment is an array A .


Output Format
Return the equilibrium index of the given array. If no such index is found then return -1.


Example Input
Input 1:
A=[-7, 1, 5, 2, -4, 3, 0]
Input 2:

A=[1,2,3]


Example Output
Output 1:
3
Output 2:

-1


Example Explanation
Explanation 1:
3 is an equilibrium index, because: 
A[0] + A[1] + A[2] = A[4] + A[5] + A[6]
Explanation 1:

There is no such index.
*/

function equilibriumIndex(arr) {
  let P = [];
  let N = arr.length;
 
  //Find prefix sum first
  for (let i = 0; i < N; i++) {
    if (i == 0) {
      P.push(arr[i]);
    } else {
      P.push(P[i - 1] + arr[i]);
    }
  }
  let left = 0;
  let right = 0;
  for (let i = 0; i < N; i++) {
    if (i > 0) {
      left = P[i - 1]; // Sum[0 i-1] = Pf[i-1]
    }
    right = P[N - 1] - P[i]; // Sum[i+1 N-1] = Pf[N-1] - P[i+1-1]
    if (left == right) {
      return i;
    }
  }

  return -1;
}
console.log(equilibriumIndex([-3, 2, 4, -1]));
console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]));
console.log(equilibriumIndex([3,-2,2]));
console.log(equilibriumIndex([1, 2, 3, 7, 1, 2, 3]));
