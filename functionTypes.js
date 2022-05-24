var iret = 0;
function additionRegular(no1, no2) {
    return no1 + no2;
}
iret = additionRegular(10, 11);
console.log("Addition is " + iret);
//Anoymous function (function without name)
var additionAnonymous = function (no1, no2) {
    return no1 + no2;
};
iret = additionAnonymous(10, 11);
console.log("Addition is " + iret);
var additionArrow = function (no1, no2) {
    return no1 + no2;
};
iret = additionArrow(10, 11);
console.log("Addition is " + iret);
