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
//# sourceMappingURL=app.js.map