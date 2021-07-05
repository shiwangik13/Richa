var myCar = new Object();
myCar.name = "Tiago";
myCar.model = 2020;
myCar.color = "Orange";
myCar.speed = 0;
myCar.move = function(){
    this.speed++;
}

console.log(myCar.name);
console.log(myCar["model"]);
console.log(myCar.color);
myCar.move();

console.log(myCar.speed);