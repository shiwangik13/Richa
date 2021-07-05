var emp = {
    name: "jack",
    salary: 608367,
    city: "Delhi",
    get empCity(){
        return this.city;
    },
    get empName(){
        return this.name;
    }
};
console.log(emp.empCity);
console.log(emp.empName);