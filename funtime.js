function isHours(sec,min,hr) {
    min = sec/60;
    hr = min/60;
    return hr;
}    
console.log(isHours(9000,0,0));