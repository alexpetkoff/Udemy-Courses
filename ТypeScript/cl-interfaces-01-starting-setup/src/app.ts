//Differences between Type and Interface =

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: "Alexander",
    age: 31,
    greet(phrase: string) {
        console.log(phrase + " " + this.name + "!");
    },
};

user1.greet("Hi there, I am");

//INTERFACE + CLASSES

//Interfaces can be used and implemented on classes to make sure certain props or methods are mandatory to the class!!!

interface Named {
    readonly name: string;
    outputName?: string; // optional, if you dont have it wont throw error!
}

interface Greetable extends Named {
    // name: string;

    greet(phrase: string): void;
}

class PersonGreeting implements Greetable {
    name: string;
    age = 31;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + " " + this.name + "!");
    }
}

const greeting = new PersonGreeting("Alexander");
greeting.greet("Hi there again, I am");

// FUNCTION TYPES =====>

// type AddFn = (a: number, b: number) => number;

// let add: AddFn;

// add = (n1: number, n2: number) => {
//     return n1 + n2;
// };

// INTERFACES AS FUNCTION TYPES ----->

interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};
