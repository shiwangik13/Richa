// Getters to get hours, minutes & seconds(getter object).
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
    this.GetHours = function(){
        return this.hours ;
    }
    this.GetMinutes = function(){
        return this.minutes ;
    }
    this.GetSeconds = function(){
        return this.seconds ;
    }

}

var clock1 = new Clock(6,29,78);
console.log(clock1);
clock1.SetClock(20000);
clock1.timePrinting();

var clock2 = new Clock(9,59,58);
console.log(clock2);
clock2.SetClock(50000);
clock2.timePrinting();

var clock3 = new Clock(12,23,01);
console.log(clock3);
clock3.SetClock(31000);
clock3.timePrinting();
clock1.GetHours();
clock2.GetHours();
clock3.GetHours();
console.log(clock1.GetHours());
console.log(clock2.GetHours());
console.log(clock3.GetHours());
console.log(clock1.GetMinutes());
console.log(clock2.GetMinutes());
console.log(clock3.GetMinutes());
console.log(clock1.GetSeconds());
console.log(clock2.GetSeconds());
console.log(clock3.GetSeconds());
