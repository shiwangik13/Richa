function x() {
    console.log('x function called');
}

function y(){
    return x;
}

var myVar = y();
myVar();