/**
 * Find if two rectangles overlap
Problem Description
Eight integers A, B, C, D, E, F, G, and H represent two rectangles in a 2D plane.

For the First rectangle,
Bottom left corner is (A, B)
Top right corner is (C, D)
For the Second rectangle,
Bottom left corner is (E, F)
Top right corner is (G, H).
Find and return whether the two rectangles overlap or not.



Problem Constraints
-104 <= A < C <= 104

-104 <= B < D <= 104

-104 <= E < G <= 104

-104 <= F < H <= 104



Input Format
The eight arguments are integers A, B, C, D, E, F, G, and H.


Output Format
Return 1 if the two rectangles overlap else, return 0.


Example Input
Input 1:

A = 0   B = 0
C = 4   D = 4
E = 2   F = 2
G = 6   H = 6
Input 2:

A = 0   B = 0
C = 1   D = 1
E = 2   F = 2
G = 3   H = 3


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
Rectangle with bottom left (2, 2) and top right (4, 4) is overlapping.
Explanation 2:

There is no Overlapping found.

Solution :
You can formulate the required conditions.

First, we can see if a foot of one rectangle is >= top of another rectangle, then an answer is not possible.

You can make a similar argument about the y-axis.

 * **/

const isOverLap = function(A, B, C, D, E, F, G, H){
    if((A>=G) || (B>=H) || (E>=C) || (F>=D)){
       return 0;
   }
   return 1;
}

console.log(isOverLap(0,0,4,4,2,2,6,6));
console.log(isOverLap(0,0,1,1,2,2,3,3));
