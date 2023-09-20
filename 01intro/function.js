function addTwo(num) {
    //num.toUpperCase();
    return num + 2;
}
addTwo(5);
//addTwo("5")
//in above code the function addTwo type is any so we we can do manipulation like num.toUpperCase,etc..so need to avoid this or like addTwo("5")
/*
the solution to this problem is by declaring type in parameter..like ..function addTwo(num:number){
.....
.....
}
*/ 
