/**
 *  Closest MinMax
 * Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3]
Input 2:

A = [2]


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 Only choice is to take both elements.
Explanation 2:

 Take the whole array.
 * 
*/

function closestMinMax(A) {
  const max = Math.max(...A);
  const min = Math.min(...A);

  let maxIndex = -1;
  let minIndex = -1;
  let ans = A.length;
  if(min===max){
    return 1;
  }
  for (let index = A.length - 1; index > 0; index--) {
    const element = A[index];
    if (element === min) {
      minIndex = index;
      if (maxIndex != -1) {
        let length = maxIndex - minIndex + 1;
        if (ans > length) {
          ans = length;
        }
      }
    } else if (element === max) {
      maxIndex = index;
      if (minIndex != -1) {
        let length = minIndex - maxIndex + 1;
        if (ans > length) {
          ans = length;
        }
      }
    }
  }

  return ans;
}

console.log(closestMinMax([1, 3, 5]));
