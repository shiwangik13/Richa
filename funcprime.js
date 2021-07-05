function isPrime(num,rem){
        for(var i=2; i<num; i++){
        if(num%i==0)
        rem=1;
}
        if(rem==1)
            return false;
        else
             return true;
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));