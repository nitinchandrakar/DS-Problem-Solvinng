public class QuerySum {
    public static int[] querySum(int[] arr, int[][] query){
        int N = arr.length;
        for(int q=0;q<query.length;q++){
            int i = query[q][0];
            int j = query[q][1];
            int x = query[q][2];

            arr[i] = arr[i]+x;

            if(j+1<N){
                arr[j+1] = arr[j+1]-x;
            }
        }

        for(int i=1;i<N;i++){
            arr[i] = arr[i] + arr[i-1];
        }

        return arr;
    }
}
