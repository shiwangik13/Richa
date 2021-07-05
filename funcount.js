function isCount(num) {
    store = 0;
    count = 0;
    rem = 0;
    
        while(num>0){
            rem = parseInt(num%10)
            store = (store*10)+rem;
            num=parseInt(num/10);
            count++
        }
        if(count==3)
            return count;
        else
            return zero;
}
console.log(isCount(145));