function required(no1:number,no2:number,no3:number):void
{
   console.log(no1+" "+no2+" "+no3);
}

////////////default should be at last positions////
function defaultfun(no1:number,no2=20,no3=30)
{
  console.log(no1+" "+no2+" "+no3);
  
}

//////////rest pn last la pahijen
function optionalfun(no1:number,no2:number,no3?:number)
{
    console.log(no1+" "+no2);
    if(no3!=undefined)
    {
    console.log(no3);
    }
}

/////////////varags pn last ani kahi vishay nahi kiti he arguments dya
function varaags(no1:number,...arr:number[])
{
  console.log(no1);
  for (let index = 0; index < arr.length; index++) {
     console.log(arr[index]);    
  }
  
}

required(1,2,3);

defaultfun(1);
defaultfun(1,2);
defaultfun(1,2,3);

optionalfun(1,2);
optionalfun(1,2,3);

varaags(1);
varaags(1,2);
varaags(1,2,3);


