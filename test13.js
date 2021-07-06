function a(){
    console.log("a function called");
}

function b(myVar){
    console.log("b function called");
    myVar;
    console.log(myVar);
}

b(a());