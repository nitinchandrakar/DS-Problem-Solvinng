/*
Write a function diff(arrA, arrB) that accepts two arrays and returns a new array that contains all values that are not contained in both input arrays. The order of numbers in the result array does not matter.

Examples

a = [1, 2, 3, 4]
b = [3, 4, 5, 6]

diff(a, b) # => [1, 2, 5, 6]

*/

function arrDifference(arr1, arr2) {
    let arrSet1 = new Set();
    let arrSet2 = new Set();
    let diffArr = [];

    for(let i=0;i<arr1.length;i++){
        arrSet1.add(arr1[i]);
    }

    for(let i=0;i<arr2.length;i++){
        arrSet2.add(arr2[i]);
    }

    arrSet1.forEach(item=>{
        if(!arrSet2.has(item)){
            diffArr.push(item);
        }
    })

    arrSet2.forEach(item=>{
        if(!arrSet1.has(item)){
            diffArr.push(item);
        }
    })

    return diffArr;

}

console.log(arrDifference([1, 2, 3, 4,4], [3, 4, 5, 6]));
