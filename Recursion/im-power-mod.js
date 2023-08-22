/**
 * Implement Power Function
Problem Description
Implement pow(A, B) % C.
In other words, given A, B and C, Find (AB % C).
Note: The remainders on division cannot be negative. In other words, make sure the answer you return is non-negative.


Problem Constraints
-109 <= A <= 109
0 <= B <= 109
1 <= C <= 109


Input Format
Given three integers A, B, C.


Output Format
Return an integer.


Example Input
Input 1:
A = 2
B = 3
C = 3
Input 2:
A = 3
B = 3
C = 1


Example Output
Output 1:
2
Output 2:
0

 * 
*/

function pow(A, B, C) {
  // Just write your code below to complete the function. Required input is available to you as the function arguments.
  // Do not print the result or any output. Just return the result via this function.
  if (B == 0) return 1 % C;
  let ans = 1n,
    base = BigInt(A),
    c1 = BigInt(C);

  while (B > 0) {
    if (B % 2 == 1) {
      ans = (ans * base) % c1;
      B--;
    } else {
      base = (base * base) % c1;
      B /= 2;
    }
  }
  if (ans < 0) ans = (ans + c1) % c1;
  return Number(ans);
}

console.log(pow(-1, 1, 20));
