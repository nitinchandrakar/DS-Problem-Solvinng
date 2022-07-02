/**
 * Problem Description
Given an integer array A of size N. In one second, you can increase the value of one element by 1.

Find the minimum time in seconds to make all elements of the array equal.


Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000


Input Format
First argument is an integer array A.


Output Format
Return an integer denoting the minimum time to make all elements equal.


Example Input
A = [2, 4, 1, 3, 2]


Example Output
8


Example Explanation
We can change the array A = [4, 4, 4, 4, 4]. The time required will be 8 seconds.
*/

function timeToEquality(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < A[i + 1]) {
      count = count + (A[i + 1] - A[i]);
      A[i] += A[i + 1] - A[i];
    } else if (A[i] > A[i + 1]) {
      count = count + (A[i] - A[i + 1]);
      A[i+1] += A[i] - A[i + 1];
    }
  }

  let max =  A[A.length-1];

  for(let i = 0; i < A.length-1; i++){
    count+=max - A[i];
  }
  
  return count;
}

console.log(timeToEquality([2, 4, 1, 3, 2]));
console.log(timeToEquality( [ 731, 349, 490, 781, 271, 405, 811, 181, 102, 126, 866, 16, 622, 492, 194, 735 ]));
