main();
function main() {
    var iret = Maximum(23, 89, 6);
    console.log("The maximum no is " + iret);
}
function Maximum(no1, no2, no3) {
    if (no1 > no2 && no1 > no3)
        return no1;
    else if (no2 > no3)
        return no2;
    else
        return no3;
}
