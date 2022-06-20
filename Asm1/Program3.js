main();
function main() {
    DisplayFactors(20);
}
function DisplayFactors(no) {
    for (var index = 1; index <= no / 2; index++) {
        if (no % index == 0) {
            console.log(index + " ");
        }
    }
}
