"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: "Alex", hobbies: ["Football"] }, { age: 30 });
console.log(mergedObject);
function countAndPrint(element) {
    let description = "Got no value.";
    if (element.length > 0) {
        description = `Got ${element.length} elements`;
    }
    return [element, description];
}
console.log(countAndPrint("Example"));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "Alexander" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Manu");
textStorage.addItem("Alexander");
console.log(textStorage.getItems());
const numStorage = new DataStorage();
numStorage.addItem(1);
numStorage.addItem(2);
numStorage.addItem("3");
console.log(numStorage.getItems());
//# sourceMappingURL=app.js.map