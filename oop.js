var Arithmatic = /** @class */ (function () {
    function Arithmatic(no1, no2) {
        console.log("inside constructor");
        this.no1 = no1;
        this.no2 = no2;
    }
    Arithmatic.prototype.addition = function () {
        return this.no1 + this.no2;
    };
    Arithmatic.prototype.substraction = function () {
        return this.no1 - this.no2;
    };
    return Arithmatic;
}());
var aobj = new Arithmatic(10, 11);
var iret = 0;
iret = aobj.addition();
console.log(iret);
iret = aobj.substraction();
console.log(iret);
