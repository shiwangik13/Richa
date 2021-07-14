// Three properties for the hours (range 0 - 23), minutes (range 0 - 59), and seconds (range 0 - 59).
function Clock(hours, minutes, seconds){
    this.hours = hours ;
    this.minutes = minutes ;
    this.seconds = seconds ;
    this.SetClock = function(seconds){
        this.hours = parseInt(seconds/3600) 
        this.minutes = parseInt((seconds - (this.hours * 3600))/60) 
        this.seconds = seconds - (this.hours * 3600) - (this.minutes * 60) 
        
    } 
    this.timePrinting = function(){
        console.log(this.hours + ':' + this.minutes + ':' + this.seconds)
    }

}

var clock1 = new Clock(4,29,78);
console.log(clock1);
clock1.SetClock(20000);
clock1.timePrinting();

var clock2 = new Clock(5,59,58);
console.log(clock2);
clock2.SetClock(50000);
clock2.timePrinting();

var clock3 = new Clock(11,23,01);
console.log(clock3);
clock3.SetClock(31000);
clock3.timePrinting();
