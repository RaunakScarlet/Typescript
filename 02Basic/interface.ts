interface person{
    color: string;
    country: string;
}
interface person{
      adharNo: number;
}
 
// we can add properties again in interface

interface isLiving extends person{
    isalive: boolean;
}
// also inherit the properties