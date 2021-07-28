function add(num1,num2) {
    return num1 + num2;


}
console.log(add(1,2));
 //lets rewrite the above normal functions as arrow function

 var func1 = (num1,num2) => num1+num2;
 console.log(func1(4,5));