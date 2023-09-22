var User = /** @class */ (function () {
    function User(name, city) {
        this.mobile = 1;
        this.name = name;
        this.city = city;
    }
    return User;
}());
var newUser = new User("raunak", "muzaffarpur");
console.log(newUser.name, newUser.city, newUser.mobile);
var ghu = new User("raunak", "muzaffarpur");
ghu.mobile = 7;
console.log(ghu.name, ghu.city, ghu.mobile);
