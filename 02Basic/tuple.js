var myarray1 = [1, "raunak"];
console.log(myarray1);
var myarray2 = [1, 2, "Steve"];
console.log(myarray2);
myarray2.push(4, 5, "raunak");
console.log(myarray2);
myarray2[2] = myarray2[2].concat(" Jobs");
console.log(myarray2);
console.log(myarray2[0]);
console.log(myarray2[2]);
// you cant assign extra type or different type to the variable
// also order is must be syncronised
// be aware .push() like method distrub the tuple
// //example
// myarray2.push(1, 2, "Bill");
// myarray2.push(1, 2, "Bill");
// // console.log(myarray2);
// // myarray2[4] = myarray2[4].concat("hhvhvvnvn");
// console.log(myarray2[0]);
