/*
Triplet sum
Given array return all triplets such that a+b+c = 0

No duplicate triplet
Return empty array if no triplet found

[-3,-1,0,1,2]
*/

var findTriplets = function(arr){
	var arr = arr.sort();
	var triplets = []

	var i = 0;

	while(i < arr.length){
		if(arr[i]>0){
            i++;
			continue;
		}

		if(i>0 && arr[i] == arr[i-1]){
            i++;
			continue;
		}

		var target = -arr[i];

		var ans = getTripletArr(arr, i+1, target);
		if(ans.length>0){
			triplets.push(...ans)
		}

		i++;
	}

    console.log(triplets);

	return triplets;
	
}

var getTripletArr = function(arr, i, target){
	
	var left = i;
	var pairs = []
	var right = arr.length -1;

	while(left < right ){
		var sum = arr[left] + arr[right];

		if(sum == target){
			pairs.push([-target, arr[left], arr[right]])

			left = left + 1;
			while(left < right && arr[left]==arr[left-1]){
				left = left + 1;
			}
		}

		else if(sum < target){
			left++;
		}

		else if(sum > target){
			right--;
		}
	}

	return pairs;
}

console.log(findTriplets([-2, 0, 1, 1, 2]));

exports.findTriplets = findTriplets;



