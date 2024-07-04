// const names: Array<string> = ["Alexander", "Petkov"]; // string[]

// //promise example
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });

// Creating a Generic Function - we are telling Typescript that T , U can be from different types and will be returned as intersected object

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({ name: "Alex" }, { age: 30 }));
const mergedObject = merge(
    { name: "Alex", hobbies: ["Football"] },
    { age: 30 }
);
console.log(mergedObject);
