main()

 function main():void
 {
  ChkArmstrong(153);
 }

 function ChkArmstrong(no:number):void
 {
    let isum=0,ipower=1,itemp=no,itemp1=no,irise=0;

    while(itemp>=1)
    {
        irise++;
        itemp=parseInt((itemp/10).toString());
    }
   
    while(itemp1>=1)
    { 
      let idigit=itemp1%10;
      for(let i=1;i<=irise;i++)
      {
         ipower=idigit*ipower;
      }
    
      isum=isum+ipower;
      ipower=1;
      itemp1=parseInt((itemp1/10).toString());
    }

    if(isum==no)
    console.log("No is Armstrong");
    else
    console.log("No is not Armstrong");

 }



 
