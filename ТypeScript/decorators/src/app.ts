function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookElement = document.getElementById(hookId);

        const person1 = new constructor();

        if (hookId && hookElement != null) {
            hookElement.innerHTML = template;
            hookElement.querySelector("h1")!.textContent = person1.name;
        }
    };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
    name = "Alexander";

    constructor() {
        console.log("Creating person object...");
    }
}

const person1 = new Person();

console.log(person1);

// --------------->

function Log(target: any, propertyName: string | Symbol) {
    console.log("property decorator");
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive number!");
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product("Book", 20);
const p2 = new Product("Book - 2", 200);

console.log(p1);
console.log(p2);
