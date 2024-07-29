// const names: Array<string> = ["Alexander", "Petkov"]; // string[]

// //promise example
// const promise: Promise<string> = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });

// const data: Promise<string> = promise.then((data) => {
//     data.split(" ");
//     return data;
// });

// console.log(data);

// Creating a Generic Function - we are telling Typescript that T , U can be from different types and will be returned as intersected object

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({ name: "Alex" }, { age: 30 }));

const mergedObject = merge(
    { name: "Alex", hobbies: ["Football"] },
    { age: 30 }
);

const mergedObj2 = merge<{ name: string; lastName: string }, { age: number }>(
    { name: "Iskander", lastName: "Petkov" },
    { age: 32 }
);

// console.log(mergedObject);
// console.log(mergedObj2);

// Type Constraints - T extends object - T is a generic type that must be an object

interface Lengthy {
    length: number;
}

// Generic functions

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let description = "Got no value.";
    if (element.length > 0) {
        description = `Got ${element.length} elements`;
    }
    return [element, description];
}

// console.log(countAndPrint("Example"));
// console.log(countAndPrint(["Example"]));

// The 'keyof' constraint

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Alexander" }, "name"));

//Generic classes

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Manu");
textStorage.addItem("Alexander");

console.log(textStorage.getItems());

const numStorage = new DataStorage<number | string>();

numStorage.addItem(1);
numStorage.addItem(2);
numStorage.addItem("3");

console.log(numStorage.getItems());

// Generic Utility Types:

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

console.log(createCourseGoal("Title", "Description", new Date("2-02-1992")));
