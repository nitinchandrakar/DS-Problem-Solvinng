/*
Write a program to print maximum and minimum elements of the input array A of size N where you have to take integer N and other N elements as input from the user.
*/

function findMinMax(arr){
    let min = Infinity;
    let max = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }

        if(arr[i]<min){
            min = arr[i]
        }
    }

    return [min, max]
}

console.log(findMinMax([1,4,5,0,7,8,-10]))