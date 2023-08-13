/**
 * Add Binary Strings
Problem Description
Given two binary strings A and B. Return their sum (also a binary string).


Problem Constraints
1 <= length of A <= 105

1 <= length of B <= 105

A and B are binary strings



Input Format
The two argument A and B are binary strings.



Output Format
Return a binary string denoting the sum of A and B



Example Input
Input 1:
A = "100"
B = "11"
Input 2:
A = "110"
B = "10"


Example Output
Output 1:
"111"
Output 2:
"1000"


Example Explanation
For Input 1:
The sum of 100 and 11 is 111.
For Input 2:
 
The sum of 110 and 10 is 1000.
 * 
*/

const addBinary1 = function (A, B) {
  const length = Math.max(A.length, B.length);
  let ansString = "";
  A = Number("0b" + A);
  B = Number("0b" + B);
  let c = 0;
  for (let i = 0; i < length; i++) {
    let sum = c + ((A & (1 << i)) > 0 ? 1 : 0) + ((B & (1 << i)) > 0 ? 1 : 0);
    let d = parseInt(sum % 2);
    c = parseInt(sum / 2);
    ansString = String(d) + ansString;
  }
  if (c != 0) {
    ansString = String(c) + ansString;
  }
  return ansString;
};

const addBinary = function (A, B) {
  let c = 0;
  let ans = "";
  let i = A.length - 1,
    j = B.length - 1;

  while (i >= 0 || j >= 0 || c) {
    let sum = 0;
    if (i >= 0) {
      sum += Number(A.charAt(i));
      i--;
    }

    if (j >= 0) {
      sum += Number(B.charAt(j));
      j--;
    }

    sum += c;
    let d = parseInt(sum%2);
    c = parseInt(sum/2);
    ans+=d;
  }

  return ans.split("").reverse().join('');
};

//console.log(1<<0)
console.log(addBinary("11", "100"));
console.log(addBinary("110", "10"));
console.log(addBinary("10001100010111000101100010100110001001101010000010011010", "101111000100100100111110010010101110101001100100101001111010011000000110"));
