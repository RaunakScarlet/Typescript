enum customenum{
    FIRST,
    SECOND,
    THIRD="RAUNAK"
}

const myenum = customenum.FIRST;
let myenum2=customenum.THIRD

console.log(myenum, myenum2);
// it is common practice to make key as uppercase and also enum properties can never be changed