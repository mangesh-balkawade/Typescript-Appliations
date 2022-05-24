function fun():void
{
console.log("inside fun");
}

function gun(no:number):void
{
    console.log(no); 
}

function sun(no:number):number
{
 var i:number=no;
 i++;
 return i;
}

fun();
gun(1);
var iret:number=sun(10);
console.log("the value is "+iret);


