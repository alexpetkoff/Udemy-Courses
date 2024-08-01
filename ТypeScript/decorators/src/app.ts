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

// ---------------> Params and Method Decorators!!! <-----------------

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

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };

    return adjDescriptor;
}

class Printer {
    message = "This works!";

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const button = document.querySelector("button")!;
const p = new Printer();

button.addEventListener("click", p.showMessage);

// Decorators for Validation

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['required', 'positive']
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ["required"],
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ["positive"],
    };
}

function validate(obj: any) {
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objectValidatorConfig) {
        return true;
    }

    let isValid = true;

    for (const prop in objectValidatorConfig) {
        for (const validator of objectValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return true;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    if (title.trim().length === 0 || price <= 0) {
        alert("Please enter valid values!");
        return;
    }

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert("Invalid input, please try again!");
        return;
    }

    console.log(createdCourse);

    titleEl.value = "";
    priceEl.value = "";
});
