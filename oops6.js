var ford = {name:"Aspire",
            color:"Blue",
        start:function(){
                console.log("car started");
        },
        move:function(){
                console.log("car is moving");
        }};

    for(property in ford)
        console.log(property + " : " + ford[property]);

        ford.start();
        ford.move();