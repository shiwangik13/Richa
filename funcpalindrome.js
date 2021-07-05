function isPalindrome(num){
    var numCopy = num;
    var rev = 0;

    while(num!=0) {
        rev = rev*10 + parseInt(num%10);
        num = parseInt(num/10);
    }
    if(numCopy == rev)
        return true;
    else
        return false;

}

console.log(isPalindrome(123));
console.log(isPalindrome(121));