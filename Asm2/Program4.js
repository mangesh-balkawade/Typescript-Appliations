main();
function main() {
    ChkArmstrong(37);
}
function ChkArmstrong(no) {
    var isum = 0, ipower = 1, itemp = no, itemp1 = no, irise = 0;
    while (itemp >= 1) {
        irise++;
        itemp = parseInt((itemp / 10).toString());
    }
    while (itemp1 >= 1) {
        var idigit = itemp1 % 10;
        for (var i = 1; i <= irise; i++) {
            ipower = idigit * ipower;
        }
        isum = isum + ipower;
        ipower = 1;
        itemp1 = parseInt((itemp1 / 10).toString());
    }
    if (isum == no)
        console.log("No is Armstrong");
    else
        console.log("No is not Armstrong");
}
