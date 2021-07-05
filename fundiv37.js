function isDiv(num) {
    if(num%3 == 0 || num%7 == 0)
        return true;
    else
        return false;
}
    console.log(isDiv(56));
    console.log(isDiv(15));