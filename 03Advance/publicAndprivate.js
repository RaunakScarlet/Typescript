// class User{
//     name: string;
//     city: string;
//     id: number = 9;
//     constructor(name, city) {
//         this.name = name;
//         this.city = city;
//     }
// }
// const newUser = new User("raunak", "muzaffarpur");
// console.log(newUser.name, newUser.city, newUser.id);
// raunak muzaffarpur 9 will be output
// class User{
//     name: string;
//     city: string;
//     private id: number = 9;
//     constructor(name, city) {
//         this.name = name;
//         this.city = city;
//     }
// }
// const newUser = new User("raunak", "muzaffarpur");
// console.log(newUser.name, newUser.city, newUser.id);
// now id is not accesible outside
// if we dont give private then it is default public
// way of same thing written code in production
var User = /** @class */ (function () {
    function User(name, city) {
        this.name = name;
        this.city = city;
        //     name: string;
        //     city: string;
        this.id = 9;
        // no need to write this keyword
    }
    return User;
}());
var newUser = new User("raunak", "muzaffarpur");
console.log(newUser.id);
