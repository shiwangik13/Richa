//  Create a constructor called Employee with atleast 3 properties and 2 behaviours and instantiate it 3 times
function employee(name , nativePlace , workingPlace , joinDate, salary){
    this.name = name ;
    this.nativePlace = nativePlace ;
    this.joinDate = joinDate ;
    this.salary = salary ;
    this.roles = function(){
        console.log(this.name + ' is also holds the responsibilities of HR in ' + this.workingPlace)
    };
    this.otherRoles = function(){
        console.log(this.name + ' also recruits people from ' + this.nativePlace);
    }

}

var employee1 = new employee(' Arjun sharma' , 'Srinagar' , 'Bangalore' , 17 , 70000);
var employee2 = new employee(' Aryan tikku' , 'Pahalgam' , ' Delhi NCR' , 23 , 60000);
var employee3 = new employee('Prithvi raj' , 'Shimla' , 'Hyderabad' , 30 , 40000);

console.log(employee1 , employee2 , employee3);
employee1.roles();
employee2.roles();
employee3.roles();
employee1.otherRoles();
employee2.otherRoles();
employee3.otherRoles();
