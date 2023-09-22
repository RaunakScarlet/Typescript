class User{
   readonly name: string;
    city: string;
    mobile: number=1;

    constructor( name:string, city:string){
    this.name = name;
    this.city=city
}
}

const newUser = new User("raunak", "muzaffarpur");
console.log(newUser.name, newUser.city, newUser.mobile);
const ghu = new User("raunak", "muzaffarpur");
ghu.mobile = 7;
console.log(ghu.name, ghu.city, ghu.mobile);
