function isPalindrome(num){
    var numCopy = num;
    var rev = 0;
    var store = 0;
    while(num!=0) {
        rev = parseInt(num%10);
        store = (store*10) + rev;
        num = parseInt(num/10);
    }
    if(numCopy == store)
        return true;
    else
        return false;

}

console.log(isPalindrome(123));
console.log(isPalindrome(121));