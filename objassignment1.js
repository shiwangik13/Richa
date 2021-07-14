// Create 2 objects car1, car2 with 8 properties and 3 behaviours using object literal.

var car1 = {
    Name : 'Grand i10',
    Version : 2019,
    Color : 'Red',
    Weight: 'More than ' + 250 + ' kgs ' ,
    Airconditioner: true ,
    PowerWindow: true ,
    Manufacturer: 'Hyundai',
    Mileage: 18 ,
    TopSpeed: function(){
        console.log('its topmost speed is ' + 220);
    },
    Serviciability: function(){
        console.log('In every ' + 1 + ' it needs service');
    },
    ExtraBenefits: function(){
        console.log('If it bought between ' + 7 + ' to ' + 17 + ' buyer will get ' + 10 + ' extra discount')

    }
    
};

var car2 = {
    Name : 'Land Rover',
    Version : 2018,
    Color : 'Black',
    Weight : 'More than ' + 350 + ' kgs ' ,
    Airconditioner: true ,
    PowerWindow: 'Jaguar',
    Mileage: 22 , 
    TopSpeed: function(){
        console.log('its topmost speed is ' + 280);
    },
    Serviciability: function(){
        console.log('In every ' + 1 + ' it needs service');
    },
    ExtraBenefits: function(){
        console.log('If it bought between ' + 5 + ' buyer will get ' + 10 + ' extra discount')
    }
};

console.log(car1);
console.log(car2);
car1.TopSpeed();
car2.TopSpeed();
car1.Serviciability();
car2.Serviciability();
car1.ExtraBenefits();
car2.ExtraBenefits();