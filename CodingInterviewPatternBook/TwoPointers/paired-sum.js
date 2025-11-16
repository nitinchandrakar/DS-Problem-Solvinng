/**
 * nums = [-5,-2,3,4,6]
 * target = 7
 * ans = [2,3] => nums[2] + nums[3] = 3 + 4 = 7
 * **/

var pairedSum = function(arr, target){
	var left = 0;
	var right = arr.length -1;
	
	while(left < right){
		var sum = arr[left] + arr[right];
		
		if(sum == target) {
			return [left, right];
		}
		
		if(sum < target){
			left ++;
		}
		
		if(sum > target){
			right --;
		}
	}

	return [];
}

exports.pairedSum = pairedSum;