function isPrime(num){
    if(num<=0 || num==1)
     return false;
    for(var i=2; i<=num/2; i++)
    if(num%i==0)
        return false;
    return true;
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));