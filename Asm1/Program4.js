main();
function main() {
    var bret = ChkPrime(10);
    if (bret === true)
        console.log("No is Prime");
    else
        console.log("No is Not Prime");
}
function ChkPrime(no) {
    if (no == 2)
        return true;
    var flag = true;
    for (var index = 2; index <= no / 2; index++) {
        if (no % index == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
