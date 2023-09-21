type usertype = {
    readonly id: number;
    name: string;
    email: string;
}

let myUser2: usertype = {
    id:1,
    name: "raunak",
    email:"raunak@gmail.com"
    
}

console.log(myUser2);
myUser2.name = "scarlet";
console.log(myUser2);
//  myUser2.id=4
// Cannot assign to 'id' because it is a read-only property.