const myarray1: number[] = [];
// alternative way
// const myarray1: Array<number> = [];

myarray1.push(1, 2, 3, 4,);
console.log(myarray1);


const myarray2: string[] = [];
// alternative way
// const myarray1: Array<string> = [];

myarray2.push("a","b","c");
console.log(myarray2);

type custom={
    name: string;
    Number: number;
}

const myarray3: Array<custom> = [];

myarray3.push(
    {
        name: "raunak",
        Number: 919930
    },
     {
        name: "scarlet",
        Number: 8874
    },
)

console.log(myarray3);

//array of array

const myarray4: Array<Array<number>> = [];
myarray4.push([1, 2, 3], [4, 5, 6]);
console.log(myarray4);