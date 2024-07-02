type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Alexander",
    privileges: ["create-server"],
    startDate: new Date(),
};

// Combining TYPES of different value types;

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Universal is of type NUMBER, because that is the only intersection between the two combined Types!

function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        //this is called typeguard.
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
    console.log("Name: " + employee.name);
    if ("privileges" in employee) {
        console.log("Privileges: " + employee.privileges);
    }
    if ("startDate" in employee) {
        console.log("Start Date: " + employee.startDate);
    }
}

printEmployeeInformation(e1);

//another example
class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive(): void {
        console.log("Driving a Truck...");
    }

    loadCargo(amount: number): void {
        console.log("Loading cargo... " + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    //with instanceof we can find out if a certain object is of a particular class instance
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

/* DISCRIMINATED UNIONS */

interface Bird {
    type: "bird"; // this is a literal type, must hold a string , its not a key that holds a value
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }

    console.log(animal.type + " is moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 120 });
moveAnimal({ type: "horse", runningSpeed: 80 });

// 87. Type Casting - helps TYPESCRIPT with type detection, like DOM elements

// const userInputElement = <HTMLInputElement>(
//     document.getElementById("user-input")
// );

const userInputElement = document?.getElementById(
    "user-input"
)! as HTMLInputElement;
userInputElement.value = "Write here...";
