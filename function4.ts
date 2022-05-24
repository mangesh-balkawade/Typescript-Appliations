function main():void
{
let  bflag:boolean=ChkEvenOdd(3);
if(bflag===true)
console.log("no is even");
else
console.log("no is odd");
}

function ChkEvenOdd(no1:number):boolean
{
    if(no1%2==0)
    return true;
    else
    return false;
}

main();