main()

function main()
{
  let s:string="Pune Kothrud Marvellous Infosystem";
   let bret:boolean=ChkString(s);
   if(bret==true)
   console.log("String contains Marvellous in it");
   else
   console.log("String does not contains Marvellous in it");
   
   
}

function ChkString(str:string):boolean
{
    let flag:boolean=false;
    let arr:string[]=str.split(" ");
    for (let index = 0; index < arr.length; index++) {
       if(arr[index]==="Marvellous")
       {
         flag=true;
         break;
       }
    }
    return flag;
}