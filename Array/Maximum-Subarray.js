/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

Reference : 
Kenden's Algorithm
https://www.youtube.com/watch?v=86CQq3pKSUw&ab_channel=CSDojo
https://www.youtube.com/watch?v=YxuK6A3SvTs&ab_channel=TECHDOSE

*/

function maxSubArraySum(arr) {
  let maxCurrent = 0;
  let maxGlobal = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    maxCurrent = maxCurrent + arr[i];

    if(maxCurrent<arr[i]){
        maxCurrent = arr[i];
    }
    if(maxGlobal<maxCurrent){
        maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}

console.log(maxSubArraySum([5,4,-1,7,8]))
