main();
function main() {
    var array = [83, 89, 6, 29, 56, 45, 77, 82];
    var iret = SecondLargestFromArray(array);
    console.log("Second largest element from array is " + iret);
}
function SecondLargestFromArray(array) {
    var max = 0, secondmax = 0;
    for (var index = 0; index < array.length; index++) {
        if (array[index] > max) {
            secondmax = max;
            max = array[index];
        }
        if (secondmax < array[index] && array[index] != max) {
            secondmax = array[index];
        }
    }
    return secondmax;
}
