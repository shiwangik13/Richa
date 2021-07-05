var emp1={
    name:"Sonu",
    id:100,
    desg:"Analyst",

    doSomething:function(){
        console.log(this.name + ' doing something ');
    }
};

var emp2={
    name:"Rohit",
    id:102,
    desg:"HR",
};

var emp3={
    name: "sweety",
    id:103,
    desg:"Developer",
};

console.log(emp1["name"]);
console.log(emp1["id"]);
console.log(emp1["desg"]);
emp1.doSomething();
