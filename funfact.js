function findFact(num,fact){
        for(var i=num;i>0;i--)
            fact=fact*i;
            return fact;
}
    console.log(findFact(5,1));