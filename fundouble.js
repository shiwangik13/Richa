function isDouble(a,b,c) {
    var d = 0;
    d = a*b*c;
    d = parseFloat(d);
        return d;
}
 console.log(isDouble(1.2,2.2,3.1));