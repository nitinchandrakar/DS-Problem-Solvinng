/**
 * Diffk II
 * 
 * Problem Description
Given an array A of integers and another non negative integer B .

Find if there exists 2 indices i and j such that A[i] - A[j] = B and i != j.



Problem Constraints
1 <= |A| <= 106

0 <= A[i] <= 109

0 <= B <= 109



Input Format
First argument A is an array of integer

Second argument B is an integer



Output Format
Return 1 if two such indexes are found and 0 otherwise


Example Input
Input 1:
A = [1, 5, 3]
B = 2
Input 2:
A = [2, 4, 3]
B = 3


Example Output
Output 1:
1
Output 2:
0


Example Explanation
For Input 1:
The given value of A[1] = 1 and A[3] = 3.
The value of A[3] - A[1] = 2.
For Input 2:
There are no pairs such that difference is B.
 * 
*/

const diffPossible = function (A, k) {
    if (A.length < 2) {
        return 0;
    }
    let hm = new Map();
    for (let i = 0; i < A.length; i++) {
        if (!hm.has(A[i])) {
            hm.set(A[i], 1);
        } else {
            hm.set(A[i], hm.get(A[i]) + 1)
        }

    }


    for (let i = 0; i < A.length; i++) {
        let b = A[i] - k;
        if(k==0 && hm.has(b) && hm.get(b)>1){
            return 1
        }else if (k!=0 && hm.has(b)) {
            return 1
        }

    }

    return 0;

}

console.log(diffPossible([77,28,19,21,67,15,53,25,82,52,8,94,50,30,37,39,9,43,35,48,82,53,16,20,13,95,18,67,77,12,93,0], 53))

console.log(diffPossible([34,63,64,38,65,83,50,44,18,34,71,80,22,28,20,96,33,70,0,25,64,96,18,2,53,100,24,47,98,69,60,55,8,38,72,94,18,68,0,53,18,30,86,55,13,93,15,43,73,68,29], 97))