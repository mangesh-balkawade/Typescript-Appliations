function fun() {
    console.log("inside fun");
}
function gun(no) {
    console.log(no);
}
function sun(no) {
    var i = no;
    i++;
    return i;
}
fun();
gun(1);
var iret = sun(10);
console.log("the value is " + iret);
