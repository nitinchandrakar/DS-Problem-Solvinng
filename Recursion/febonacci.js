function febonacci(n){
    if(n<2){
        return n;
    }else{
        return febonacci(n-1)+ febonacci(n-2)
    }
}

console.log(febonacci(10))