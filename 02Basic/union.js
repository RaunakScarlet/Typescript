var key = 123455;
console.log(key);
var key2 = "123455";
console.log(key2);
var key3 = [1, 2, 3, 4, 5];
console.log(key3);
var key4 = ["1", "2", "3", "4", "5"];
console.log(key4);
var key5 = [1, 2, 3, 4, 5, "a", "b", "c"];
console.log(key5);
function LogIn(id) {
    if (typeof id === "string") {
        console.log(id);
        var customId = id.toUpperCase();
        console.log(customId);
    }
    console.log(id);
}
LogIn(2);
LogIn("abdD");
