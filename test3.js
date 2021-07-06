var x = function(y) {
    y();
}
var abc = function(){
    console.log('abc');
}
x(abc);