const names: Array<string> = ["Alexander", "Petkov"]; // string[]

//promise example
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
