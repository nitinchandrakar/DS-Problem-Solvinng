
/**
 * Sort by Color
 * 
 * Problem Description
Given an array with N objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will represent the colors as,

red -> 0
white -> 1
blue -> 2

Note: Using the library sort function is not allowed.



Problem Constraints
1 <= N <= 1000000
0 <= A[i] <= 2


Input Format
First and only argument of input contains an integer array A.


Output Format
Return an integer array in asked order


Example Input
Input 1 :
    A = [0, 1, 2, 0, 1, 2]
Input 2:

    A = [0]


Example Output
Output 1:
    [0, 0, 1, 1, 2, 2]
Output 2:

    [0]


Example Explanation
Explanation 1:
    [0, 0, 1, 1, 2, 2] is the required order.
Explanation 2:
    [0] is the required order
*/


var sortColors =  function(A){
    let count_0 = 0;
    let count_1 = 0;

    for(let i=0;i<A.length;i++){
        if(A[i]===0){
            count_0++;
        }
        if(A[i]===1){
            count_1++;
        }
    }

    let i =0;
    while(i<count_0){
            A[i]=0;
            i++;
    }

    while(i<count_0+count_1){
            A[i]=1;
            i++;
    }

    while(i<A.length){
            A[i]=2;
            i++;
    }

    return A;
}

console.log(sortColors([0, 1, 2, 0, 1, 2]))