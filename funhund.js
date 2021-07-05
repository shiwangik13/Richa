function hundDigit(num) {
    var count = 0;
    var rem = 0;
    while(count<=2){
        rem = num % 10;
        num = parseInt (num/10);
        count++;
    }
    return rem;
}
console.log(hundDigit(1234));