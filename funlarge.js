function isLargestno(a,b,c) {
    var largest = 0;
    
    if(a>b && a>c) {
        largest = a;
    }
    else {
        if(b>a && b>c)
            largest = b;
    }
    if(c>a && c>b)
        largest = c;
    return largest;
}
    console.log(isLargestno(13,8,3));