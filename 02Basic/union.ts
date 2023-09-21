let key: number | string = 123455;
console.log(key);

let key2: number | string = "123455";
console.log(key2);

let key3: number[] | string = [1,2,3,4,5]
console.log(key3);

let key4: number[] | string[] = ["1","2","3","4","5"]
console.log(key4);

let key5: (number | string)[] = [1,2,3,4,5,"a","b","c"]
console.log(key5);

function LogIn(id: number | string) {
    if (typeof  id === "string") {
        
        console.log(id);
        let customId = id.toUpperCase();
        console.log(customId);
    }
    console.log(id);
    
}

LogIn(2);
LogIn("abdD");