main();
function main() {
    var arr = [23, 6, 7, 4, 5, 7];
    var iret = SumOfArray(arr);
    console.log("Sum Of Array Is " + iret);
}
function SumOfArray(array) {
    var isum = 0;
    for (var index = 0; index < array.length; index++) {
        isum = isum + array[index];
    }
    return isum;
}
