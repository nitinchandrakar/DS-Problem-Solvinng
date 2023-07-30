/**
 * Maximum Subarray
 * Problem Description
    You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
    But the sum must not exceed B.
 * Problem Constraints
1 <= A <= 103
1 <= B <= 109
1 <= C[i] <= 106


Input Format
The first argument is the integer A.
The second argument is the integer B.
The third argument is the integer array C.


Output Format
Return a single integer which denotes the maximum sum.


Example Input
Input 1:
A = 5
B = 12
C = [2, 1, 3, 4, 5]
Input 2:

A = 3
B = 1
C = [2, 2, 2]


Example Output
Output 1:
12
Output 2:

0


Example Explanation
Explanation 1:
We can select {3,4,5} which sums up to 12 which is the maximum possible sum.
Explanation 2:

All elements are greater than B, which means we cannot select any subarray.
Hence, the answer is 0.


Solution :
The most basic brute force approach would be to find the sum of every subarray and check if it less than B,
we will put it in a variable which will store the maximum value less than B.
The time complexity of this approach would be O(N ^ 3).

But, for the given constraints, the best we can do is O(N ^ 2).
We can do this easily just by modifying the way we iterate through the loop.

We will use the following pseudocode:

ans = 0
for(start = 0, start < size; start += 1)
    sum = 0
    for(end = start; end < size; end += 1)
        sum += array[end]
        if(sum <= MaximumValue)
            ans = max(sum, ans)
        else
            break

Using this, we are checking the sum of every subarray but this method is faster.

Refer to the complete solution for more details.

 * **/

const maxSubarray = function (N, B, arr) {
    let ans = 0;
    for(let i=0;i<N; i++){
        let sum =0;
        for(let j=i;j<N;j++){
            sum = sum + arr[j];
            if(sum<=B){
                ans = Math.max(sum, ans);
            }
        }
    }
    return ans;
};

console.log(maxSubarray(5, 12, [2, 1, 3, 4, 5]));
console.log(maxSubarray(1, 75, [4]));
