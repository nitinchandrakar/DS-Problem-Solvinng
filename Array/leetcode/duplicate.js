/**
 * 217. Contains Duplicate
Easy

5785

992

Add to List

Share
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 * **/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[Math.abs(nums[i])]>=0){
            nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]
        }else{
            console.log(nums[Math.abs(nums[i])])
            return true;
        }
    }

    return false;
};

//console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

console.log(containsDuplicate([1,2,3,4]))