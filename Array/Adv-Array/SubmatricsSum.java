import java.util.ArrayList;

public class SubmatricsSum {
    public static ArrayList<Integer> subMatrixSum(ArrayList<ArrayList<Integer>> A, ArrayList<Integer> B, ArrayList<Integer> C, ArrayList<Integer> D, ArrayList<Integer> E) {

        ArrayList<ArrayList<Integer>> PS =  new ArrayList<ArrayList<Integer> >();
        int N = A.size();
        int M = A.get(0).size();

        // Get row PS
        for(int i=0;i<N;i++){
            ArrayList<Integer> temp = new ArrayList<>();
            for(int j=0;j<M;j++) {
                if(j==0){
                    temp.add(A.get(i).get(j));
                }else{
                    temp.add( temp.get(temp.size()-1) + A.get(i).get(j));
                }
            }
            PS.add(temp);
        }

        // Get col PS
        for(int j=0;j<M;j++){
            for(int i=0;i<N;i++) {
                if(i==0){
                    PS.get(i).set(j, PS.get(i).get(j));
                }else{
                    PS.get(i).set(j, PS.get(i-1).get(j) + PS.get(i).get(j));
                }
            }

        }

        int Q = B.size();

        ArrayList<Integer> ans = new ArrayList<>();


        for(int k=0;k<Q;k++){
            int b = B.get(k) -1;
            int c = C.get(k) -1;
            int d = D.get(k) -1;
            int e = E.get(k) -1;
            double sum;

            if((b==0 && c==0)){
                sum = PS.get(d).get(e);
            }else{
                sum = PS.get(d).get(e);
                if(c>0){
                    sum = sum - PS.get(d).get(c-1);
                }

                if(b>0){
                    sum = sum - PS.get(b-1).get(e);
                }

                if(b>0 && c>0){
                    sum = sum +  PS.get(b-1).get(c-1);
                }


            }

            sum = sum %( Math.pow(10,9) + 7);
            //sum = sum % (Math.pow(10,9)) + 7;
            ans.add((int) sum);

        }


        return ans;
    }

    public static void main(String[] args){


        ArrayList<ArrayList<Integer> > array_list = new ArrayList<ArrayList<Integer> >();

        ArrayList<Integer> B = new ArrayList<>();
        B.add(1);
        B.add(2);

        ArrayList<Integer> C = new ArrayList<>();
        C.add(1);
        C.add(2);

        ArrayList<Integer> D = new ArrayList<>();
        D.add(2);
        D.add(3);

        ArrayList<Integer> E = new ArrayList<>();
        E.add(2);
        E.add(3);



        ArrayList<Integer> temp = new ArrayList<>();
        temp.add(1);
        temp.add(2);
        temp.add(3);
        array_list.add(temp);
        temp = new ArrayList<>();
        temp.add(4);
        temp.add(5);
        temp.add(6);
        array_list.add(temp);

        temp = new ArrayList<>();
        temp.add(7);
        temp.add(8);
        temp.add(9);
        array_list.add(temp);


       System.out.print(subMatrixSum(array_list, B, C, D, E));


        array_list = new ArrayList<ArrayList<Integer> >();

        temp = new ArrayList<>();
        temp.add(5);
        temp.add(17);
        temp.add(100);
        temp.add(11);
        array_list.add(temp);

        temp = new ArrayList<>();
        temp.add(0);
        temp.add(0);
        temp.add(2);
        temp.add(8);
        array_list.add(temp);

         B = new ArrayList<>();
        B.add(1);
        B.add(1);

        C = new ArrayList<>();
        C.add(1);
        C.add(4);

        D = new ArrayList<>();
        D.add(2);
        D.add(2);

         E = new ArrayList<>();
        E.add(2);
        E.add(4);


      //  System.out.print(subMatrixSum(array_list, B, C, D, E));





    }
}
