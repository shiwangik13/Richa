var emp = {
    name: "jack",
    salary: 608367,
    city: "Delhi",
    
    set empCity(empCity){
        this.city = empCity;
    },
    set empName(empName){
        this.name = empName;
    },
    set empSalary(empSalary){
        this.salary= empSalary;
    }
};
    
emp.empCity = "Mangluru";
emp.empName = "Manasa";
emp.empSalary = 420;

console.log(emp["name"]);
console.log(emp.city);
console.log(emp.salary);