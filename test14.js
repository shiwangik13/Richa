function x() {
    return y;
}

function y() {
    console.log("Greetings from y");

}
var func = x();
func();
x()();