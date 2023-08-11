/**
 * Q1. Length of longest consecutive ones
Unsolved
feature icon
Using hints is now penalty free
Use Hint
Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.


Input Format

The only argument given is string A.
Output Format

Return the length of the longest consecutive 1’s that can be achieved.
Constraints

1 <= length of string <= 1000000
A contains only characters 0 and 1.
For Example

Input 1:
    A = "111000"
Output 1:
    3

Input 2:
    A = "111011101"
Output 2:
    7
 * 
 * **/

const consecutiveOnes = function (A) {
  A = A.split('');
  const N = A.length;
  let count = 0;
  let ans = -Infinity;
  for (let i = 0; i < N; i++) {
    if (A[i] == 1) {
      count = count + 1;
    }
  }

  if(count == N){
    return count;
  }

  for(let i = 0; i < N; i++){
    if(A[i]==0){
        let l = r = 0;
        for(let j=i-1;j>=0;j--){
            if(A[j]==1){
                l++;
            }else{
                break;
            }
        }

        for(let j=i+1;j<N;j++){
            if(A[j]==1){
                r++;
            }else{
                break;
            }
        }

        if(l+r < count){
            ans = Math.max(l+r+1, ans)
        }else{
            ans = Math.max(l+r, ans)
        }
    }
  }

  return ans;
};

console.log(consecutiveOnes('111011101'))
console.log(consecutiveOnes('111000'))

console.log(consecutiveOnes('111111111111'))
