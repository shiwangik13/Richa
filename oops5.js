var msg1 = {to:123456789,
            msg:"How are you  ?",
            delivered:true,
             read:false,
            from:34251678}

for(prop in msg1)
    console.log(prop);

for(property in msg1)
    console.log(property + " : " + msg1[property]);

console.log('______');
console.log(msg1["delivered"]);
var keyX = "delivered";
console.log(msg1[keyX]);``