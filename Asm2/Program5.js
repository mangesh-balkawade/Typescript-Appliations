main();
function main() {
    var s = "Pune Kothrud Marvellous Infosystem";
    var bret = ChkString(s);
    if (bret == true)
        console.log("String contains Marvellous in it");
    else
        console.log("String does not contains Marvellous in it");
}
function ChkString(str) {
    var flag = false;
    var arr = str.split(" ");
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] === "Marvellous") {
            flag = true;
            break;
        }
    }
    return flag;
}
