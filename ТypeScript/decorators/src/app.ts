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
