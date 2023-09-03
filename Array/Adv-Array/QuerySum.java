import java.util.Arrays;

/**
 * Given arr[N]=0
 * Query [(i,j,x)...]
 * Add x to all numbers from A[i] to A[j] and return final array
 * 
 */

public class QuerySum {
    public static int[] querySum(int[] arr, int[][] query) {
        int N = arr.length;
        for (int q = 0; q < query.length; q++) {
            int i = query[q][0];
            int j = query[q][1];
            int x = query[q][2];

            arr[i] = arr[i] + x;

            if (j + 1 < N) {
                arr[j + 1] = arr[j + 1] - x;
            }
        }

        for (int i = 1; i < N; i++) {
            arr[i] = arr[i] + arr[i - 1];
        }

        return arr;
    }

    public static void main(String[] args) {
        System.out.print(Arrays.toString(
                querySum(new int[] { 0, 0, 0, 0, 0, 0, 0 }, new int[][] { { 1, 3, 2 }, { 2, 5, 3 }, { 2, 4, -1 } })));
    }
}
