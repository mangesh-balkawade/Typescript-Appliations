main();
function main() {
    Fibonancy(10);
}
function Fibonancy(no) {
    var a = 0, b = 1, c = 0;
    for (; c < no;) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
