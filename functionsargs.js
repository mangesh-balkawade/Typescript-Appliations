function required(no1, no2, no3) {
    console.log(no1 + " " + no2 + " " + no3);
}
////////////default should be at last positions////
function defaultfun(no1, no2, no3) {
    if (no2 === void 0) { no2 = 20; }
    if (no3 === void 0) { no3 = 30; }
    console.log(no1 + " " + no2 + " " + no3);
}
function optionalfun(no1, no2, no3) {
    console.log(no1 + " " + no2);
    if (no3 != undefined) {
        console.log(no3);
    }
}
function varaags(no1) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    console.log(no1);
    for (var index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}
required(1, 2, 3);
defaultfun(1);
defaultfun(1, 2);
defaultfun(1, 2, 3);
optionalfun(1, 2);
optionalfun(1, 2, 3);
varaags(1);
varaags(1, 2);
varaags(1, 2, 3);
