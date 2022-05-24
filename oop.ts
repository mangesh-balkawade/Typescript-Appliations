class Arithmatic
{
   private  no1:number;
   private  no2:number;

    public constructor(no1:number,no2:number)
    {
       this.no1=no1;
       this.no2=no2;
    }

    public addition():number
    {
        return this.no1+this.no2;
    }

    public substraction():number
    {
        return this.no1-this.no2;
    }
    
}

var aobj=new Arithmatic(10,11);
var iret=0;

iret=aobj.addition();
console.log(iret);

iret=aobj.substraction();
console.log(iret);











