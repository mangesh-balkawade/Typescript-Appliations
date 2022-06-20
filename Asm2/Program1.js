main();
function main() {
    var array = [23, 89, 6, 29, 56, 45, 77, 32];
    var iret = MaxFromArray(array);
    console.log("Max fro array is " + iret);
}
function MaxFromArray(arr) {
    var max = 0;
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > max)
            max = arr[index];
    }
    return max;
}
