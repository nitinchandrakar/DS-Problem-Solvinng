function febonacci(){
    let cache = {}

    return function feb(n){
        if(n in cache){
            return cache[n];
        }else{
            if(n<2){
                return n;
            }else{
                cache[n] = feb(n-1) + feb(n-2);
                return cache[n];
            }
        }
    }

}

console.log(febonacci()(10))