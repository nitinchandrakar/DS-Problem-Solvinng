/*find special index

arr= [3,2,6,8,2,9,7,6,4,12]

*/

function findSpecialIndex(arr){
    var j=0;
    var PFe = [];
    var PFo = [];
    var N = arr.length;
    for(var i=0;i<arr.length;i++){
        if(i==0){
            PFe[i]=arr[i];
        }else if(i%2==0){
            PFe[i]= PFe[i-1] + arr[i];
        }else{
            PFe[i] = PFe[i-1];
        }
    }
    
    PFo[0] = 0;
    for(var i=1;i<arr.length;i++){
       if(i%2!=0){
            PFo[i]= PFo[i-1] + arr[i];
        }else{
            PFo[i] = PFo[i-1];
        }
    }

    var count = 0;

    for(var i=0;i<N;i++){
        var So, Se;
        if(i==0){
            Se= PFe[N-1] - PFe[i];
            So= PFo[N-1] - PFo[i];
        }else{
            So= PFo[i-1] + PFe[N-1] - PFe[i];
            Se= PFe[i-1] + PFo[N-1] - PFo[i];
        }

        if(Se==So){
            count = count+1;
        }
    }

    return count;

}

console.log(findSpecialIndex([1, 1, 1]))
console.log(findSpecialIndex([2, 1, 6, 4]))