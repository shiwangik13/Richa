function tenthDigit(num) {
    var count = 0;
    var rem = 0;

    while (count <= 1) {
            rem = num%10;
            num = parseInt(num/10);
            count++;
    }
    return rem;
}
console.log(tenthDigit(1234));