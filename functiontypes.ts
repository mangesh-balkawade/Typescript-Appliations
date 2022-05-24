var iret:number=0;

function additionRegular(no1:number,no2:number):number
{
   return no1+no2;
}

iret=additionRegular(10,11);
console.log("Addition is "+iret);

//Anoymous function (function without name)
var additionAnonymous=function(no1:number,no2:number):number
{
    return no1+no2;
}

iret=additionAnonymous(10,11);
console.log("Addition is "+iret);

//////Arrow / Fat Arrow / Lambda
var additionArrow=(no1:number,no2:number):number=>
{
    return no1+no2;
}

iret=additionArrow(10,11);
console.log("Addition is "+iret);









