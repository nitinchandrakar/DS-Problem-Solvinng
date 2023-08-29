
/**
 * Max Sum Contiguous Subarray
 * 
 * Problem Description
Find the maximum sum of contiguous non-empty subarray within an array A of length N.



Problem Constraints
1 <= N <= 1e6
-1000 <= A[i] <= 1000



Input Format
The first and the only argument contains an integer array, A.



Output Format
Return an integer representing the maximum possible sum of the contiguous subarray.



Example Input
Input 1:

 A = [1, 2, 3, 4, -10] 
Input 2:

 A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 


Example Output
Output 1:

 10 
Output 2:

 6 


Example Explanation
Explanation 1:

 The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
Explanation 2:

 The subarray [4,-1,2,1] has the maximum possible sum of 6. 
 * 
 * **/

import java.util.List;

public class MaxSubArray {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public int maxSubArray(final List<Integer> A) {
        int currentSum = 0;
        int maxSum = Integer.MIN_VALUE;
        int minValue = Integer.MIN_VALUE;

        int N = A.size();

        if (N == 1) {
            return A.get(0);
        }

        for (int i = 0; i < N; i++) {
            currentSum = Math.max(0, currentSum + A.get(i));
            maxSum = Math.max(currentSum, maxSum);
            minValue = Math.max(minValue, A.get(i));
        }

        return maxSum <= 0 ? minValue : maxSum;
    }
}
