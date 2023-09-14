/**
 * Find all the factor of 1 to N 
 * 
*/

var findAllFactors = function(N){
    let factorArr = new Array(N+1).fill(1);

    for(let i=2;i<=N;i++){
        // multiple of i = i, 2i, 3i...

        for(let j=i;j<N;j= j+i){
            factorArr[j] = factorArr[j]+1;
        }
    }

    return factorArr;
}

console.log(findAllFactors(20));