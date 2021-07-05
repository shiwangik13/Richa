function isSum(num) {
    var rem = 0;
    var sum = 0;

while(num > 0) {
    rem = parseInt(num%10);
    sum = sum + rem;
    num = parseInt(num/10);
}
    return sum;
}
console.log(isSum(123));