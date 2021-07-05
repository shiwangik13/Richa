var from = 1;
var to = 100;

for(var i=from; i<=to; i++){
    for(var j=2; j<parseInt(i/2); j++){
if(i%j==0)
break;
    }
    
if(j==parseInt(i/2))
console.log (i);
}