function addTwo(num) {
    //num.toUpperCase();
    return num + 2;
}

addTwo(5)
    //addTwo("5")

    //in above code the function addTwo type is any so we we can do manipulation like num.toUpperCase,etc..so need to avoid this or like addTwo("5")

    /*
    the solution to this problem is by declaring type in parameter..like ..function addTwo(num:number){
    .....
    .....
}
*/


//there is cathc
function addThree(num:number) {
    
    num + 3;
    
    return "helo"
}

addThree(5)
//although num cannot be changed in other datatype but function is expected to give number but right now it is returning string type

/*so in order to make function return appropiate datatpe we have to do like this function addThree(num:number):number{
.......
.......
}
*/
