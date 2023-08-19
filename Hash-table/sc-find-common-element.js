

const commonElement = function (A, B) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.

    let hm = new Map();
    let hm2 = new Map();
    let ans = []
    for (let i = 0; i < A.length; i++) {
        if (!hm.has(A[i])) {
            hm.set(A[i], 1);
        } else {
            hm.set(A[i], hm.get(A[i]) + 1)
        }

    }

    for (let i = 0; i < B.length; i++) {
        if (!hm2.has(B[i])) {
            hm2.set(B[i], 1);
        } else {
            hm2.set(B[i], hm2.get(B[i]) + 1)
        }
    }

    hm2.forEach(function(value, key){
        if(hm.has(key)){
            let freq = hm.get(key);
            let rep = Math.min(freq, value);
            for(let i=0;i<rep;i++){
                ans.push(key);
            }
        }
    })

    return ans;
}

console.log(commonElement([1, 2, 2, 1], [2, 3, 1, 2]))