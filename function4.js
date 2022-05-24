function main() {
    var bflag = ChkEvenOdd(3);
    if (bflag === true)
        console.log("no is even");
    else
        console.log("no is odd");
}
function ChkEvenOdd(no1) {
    if (no1 % 2 == 0)
        return true;
    else
        return false;
}
main();
