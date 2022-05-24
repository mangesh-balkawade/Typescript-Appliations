main()
function main():void
{
 let choice:Number=1;
 DisplayForLoop(5);
 console.log("---------");
 DisplayWhileLoop(5);
}

function DisplayForLoop(no:number):void
{

    for(let icnt:number=1;icnt<=no;icnt++)
    {
       console.log("Hello");
       
    }
}

function DisplayWhileLoop(no:number):void
{
  let icnt:number=1;
  while(icnt<=no)
  {
      console.log("Hello");
      icnt++;    
  }
}