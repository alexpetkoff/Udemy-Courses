// function add(n1: number, n2: number) {
//     return n1 + n2;
// }

function printResult(num: number): void {
    console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// printResult(add(5, 10));

let combineValues: (a: number, b: number) => number; //what we are telling TS is that combineValues should take a function that recieves exactly 2 inputs which are numbers and that the return value of combineValues is of type number!

addAndHandle(5, 5, (result) => {
    console.log(result);
});
