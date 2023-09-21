type consumer = {
    readonly id: number;
    name: string;
    email: string;
    creditCard?: number;
}

let myUser2: consumer = {
    id:1,
    name: "raunak",
    email: "raunak@gmail.com",
    creditCard:8243897894
    
}

let myUser3: consumer = {
    id:1,
    name: "raunak",
    email: "raunak@gmail.com",
   
    
}
console.log(myUser2);

console.log(myUser3);

// creditcard property is optinal 
//it won't complain if creditCard arguments is not passed