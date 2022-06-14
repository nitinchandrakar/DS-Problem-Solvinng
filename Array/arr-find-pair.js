/*
Given N array element, check if there exist a pair i,j such that arr[i]+arr[j]==k && i!=j note i & j are index value k is the given sum
*/

function findPair(arr, k){
    for(var i=1;i<arr.length;i++){
        for(j=0;j<i;j++){
            if(arr[i]+arr[j]==k){
                return true;
            }
        }
    }

    return false;
}

function findPairBetterWay(arr, sum){
    let complimentSet = new Set();

    for(let i=0;i<arr.length;i++){
        if(complimentSet.has(arr[i])){
            return true
        }else{
            complimentSet.add(sum-arr[i])
        }
       
    }

    return false;
}


console.log(findPair([2,1,-4,5,5,2,1,4,0], -1))

console.log(findPairBetterWay([2,1,-4,5,5,2,1,4,0], -1))