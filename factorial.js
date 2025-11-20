function factorial(n){
    let fac = 0;
    for(let i=0; i<=n; i++){
        fac += i
    }
    return fac
}

console.log(factorial(10))