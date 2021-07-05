var myCar = {
    name:"Tiago",
    model:2018,
    color:"Orange",
    speed:0,
    move:function(){
        this.speed++;
    }
};

myCar.move();myCar.move();myCar.move();
console.log(myCar.speed);