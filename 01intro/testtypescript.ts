type test1 = {
    //a: number;
    b: number;
}

type test2 = {
    a: string;
  //  b: string;
    c: boolean;
}

type test3 = test1 & test2;

let variableOfTypeTest3: test3 = {
    // Here, we choose the type from test2
     a: "Hello",
    b: 5,
    
   
};

console.log(variableOfTypeTest3);
