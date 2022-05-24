main();
function main() {
    DisplayForLoop(5);
    console.log("---------");
    DisplayWhileLoop(5);
}
function DisplayForLoop(no) {
    for (var icnt = 1; icnt <= no; icnt++) {
        console.log("Hello");
    }
}
function DisplayWhileLoop(no) {
    var icnt = 1;
    while (icnt <= no) {
        console.log("Hello");
        icnt++;
    }
}
