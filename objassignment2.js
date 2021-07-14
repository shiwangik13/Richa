// Store & display 5 employee details (should have at least 5 properties and 2 behaviours) using Object constructor.
var Employee1 = new Object ();
    Employee1.name = 'Richa';
    Employee1.id = 101;
    Employee1.joiningDate = 22 + ' Jan' ;
    Employee1.age = 26 ;
    Employee1.city = 'Hyderabad' ;
    Employee1.educationDetails = function(){
            console.log('MCA')
    };
    Employee1.package = function(){
        console.log('Rs ' + 60000 + ' per month')
    };



    var Employee2 = new Object ();
    Employee2.name = 'Rishal';
    Employee2.id = 102;
    Employee2.joiningDate = 1 + ' Feb' ;
    Employee2.age = 27 ;
    Employee2.city = 'Hyderabad' ;
    Employee2.educationDetails = function(){
            console.log(' BCA')
    };
    Employee2.package = function(){
        console.log('Rs ' + 200000 + ' per month')
    };

    
    var Employee3 = new Object ();
    Employee3.name = 'Anku';
    Employee3.id = 103;
    Employee3.joiningDate = 2 + ' March' ;
    Employee3.age = 28 ;
    Employee3.city = 'Noida' ;
    Employee3.educationDetails = function(){
        console.log(' MBA')
    };
    Employee3.package = function(){
        console.log('Rs ' + 40000 + ' per month')
    };

    
    var Employee4 = new Object ();
    Employee4.name = 'Subha';
    Employee4.id = 107;
    Employee4.joiningDate = 05 + ' April' ;
    Employee4.age = 29 ;
    Employee4.city = 'Banglore' ;
    Employee4.educationDetails = function(){
        console.log(' B.tech')
    };
    Employee4.package = function(){
        console.log('Rs ' + 47000 + ' per month')
};


   
    var Employee5 = new Object ();
    Employee5.name = 'Anurag';
    Employee5.id = 109;
    Employee5.joiningDate = 1 + ' May' ;
    Employee5.age = 31 ;
    Employee5.city = 'Delhi' ;
    Employee5.educationDetails = function(){
          console.log(' Btech')
    };
    Employee5.package = function(){
          console.log('Rs ' + 300000 + ' per month')
};


console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log(Employee4);
console.log(Employee5);
