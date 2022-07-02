/*
Problem Description
You are given an integer array A of size N.

You have to pick B elements in total. Some (possibly 0) elements from left end of array A and some (possibly 0) from the right end of array A to get the maximum sum.

Find and return this maximum possible sum.

NOTE: Suppose B = 4, and array A contains 10 elements, then

You can pick the first four elements or can pick the last four elements, or can pick 1 from front and 3 from the back, etc. You need to return the maximum possible sum of elements you can pick.


Problem Constraints
1 <= N <= 105

1 <= B <= N

-103 <= A[i] <= 103



Input Format
First argument is an integer array A.

Second argument is an integer B.



Output Format
Return an integer denoting the maximum possible sum of elements you picked.



Example Input
Input 1:

 A = [5, -2, 3 , 1, 2]
 B = 3
Input 2:

 A = [1, 2]
 B = 1


Example Output
Output 1:

 8
Output 2:

 2


Example Explanation
Explanation 1:

 Pick element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
Explanation 2:

 Pick element 2 from end as this is the maximum we can get
*
*/

function pickFromBothSide(arr, b){
   let firstHalf = [];
   let secondHalf = []
   for(let i=0, j=arr.length-1;i<b;i++,j--){
        if(i==0){
            secondHalf.push(arr[j]);
            firstHalf.push(arr[i]);
        }else{
            //arr[i] = arr[i]+arr[i-1];
            firstHalf.push(firstHalf[i-1]+arr[i])
            secondHalf.push(secondHalf[i-1]+arr[j]); 
        }
   }

   let max;
   if(firstHalf[b-1]>secondHalf[b-1]){
    max = firstHalf[b-1];
   }else{
    max = secondHalf[b-1];
   }
   for(let i=0,j=b-2;i<b-1;i++,j--){
        if(firstHalf[i]+secondHalf[j]>max){
            max = firstHalf[i]+secondHalf[j];
        }

   }

   return max;
  // console.log(secondHalf, arr)
}

console.log(pickFromBothSide([5, -2, 3 , 1, 2], 3));

console.log(pickFromBothSide([1,2], 1));

console.log(pickFromBothSide([ -712, -894, 40, -58, 264, -352, 446, 805, 890, -271, -630, 350, 6, 101, -607, 548, 629, -377, -916, 954, -244, 840, -34, 376, 931, -692, -56, -561, -374, 323, 537, 538, -882, -918, -71, -459, -167, 115, -361, 658, -296, 930, 977, -694, 673, -614, 21, -255, -76, 72, -730, 829, -223, 573, 97, -488, 986, 290, 161, -364, -645, -233 ], 34));

console.log(pickFromBothSide([ 448, 200, 458, -382, -420, 796, -202, 281, 589, -202, -991, 157, -528, 622, -462, -708, -962, -821, -810, 657, 958, -809, 815 ], 4))

console.log(pickFromBothSide([ 448, 200, 458, -382, 657, 958, -809, 815 ], 4))