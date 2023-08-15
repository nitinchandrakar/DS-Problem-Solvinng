/**
 *  Divisibility by 8
 * 
 * Problem Description
You are given a number A in the form of a string. Check if the number is divisible by eight or not.

Return 1 if it is divisible by eight else, return 0.


Problem Constraints
1 <= length of the String <= 100000
'0' <= A[i] <= '9'


Input Format
The only argument given is a string A.


Output Format
Return 1 if it is divisible by eight else return 0.


Example Input
Input 1:
A = "16"
Input 2:

A = "123"


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
 16 = 8 * 2
Explanation 2:

123 = 15 * 8 + 3


*/

const divisibility = function (A) {
    const N = A.length;
    let i = N-1;
    let j = 0;
    let coutNum = 0;
    while (j<3 && i>=0) {
        let num = Number(A.charAt(i))
        coutNum = coutNum + num * Math.pow(10, j);
        i--
        j++
    }

    if (coutNum % 8 === 0) {
        return 1
    }
    return 0;
}

console.log(divisibility('8'))
console.log(divisibility('4758310052942341036336679074241759053154797537802772'))

