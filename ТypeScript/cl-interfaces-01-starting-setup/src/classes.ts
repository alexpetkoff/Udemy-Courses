//Singleton Pattern = insuring that you always have one instance of a certain class. !!!Means - one object based on a certain class!!!

class Department {
    private id: string;
    public name: string; // public is the default! not mandatory to initialize a prop with public infront!
    private employees: string[] = []; //private means the method is not accessible outside the class Department.
    //protected = another type of initializing prop, the same as private, but can be accessible by any class that extends the original class.

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }

    //adding abstract infront of a method (also should add it infront of the class name!)
    describe() {
        console.log("DEPARTMENT: " + this.name + ", " + this.id);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log("Number of employees: ", this.employees.length);
        console.log(this.employees);
    }
}

// extends is used for Inheritance
class ITDepartment extends Department {
    public admin: string;

    get mostRecentAdminName() {
        return this.admin;
    }

    constructor(name: string, id: string, admin: string) {
        super(name, id); //used to pass the additional props to the parent class
        this.admin = admin;
    }

    getAdminName() {
        console.log("ADMIN NAME: " + this.admin);
    }
}

let accounting = new ITDepartment(
    "IT Accounting",
    " ID: 01",
    "Alexander Petkov"
);

accounting.describe();

accounting.addEmployee("Aleks");
accounting.addEmployee("Pesho");

accounting.printEmployeeInfo();
accounting.getAdminName();

class Configuration {
    static readonly appName: string = "MyApp";
    static version: string = "1.0.0";
    static apiUrl: string = "https://api.myapp.com";

    static printConfig(): void {
        console.log(
            `App: ${this.appName}, Version: ${this.version}, API URL: ${this.apiUrl}`
        );
    }
}

// Accessing static properties
console.log(Configuration.appName); // Output: MyApp
console.log(Configuration.version); // Output: 1.0.0

// Modifying static properties
Configuration.version = "1.0.1";
console.log(Configuration.version); // Output: 1.0.1

// Accessing static method
Configuration.printConfig(); // Output: App: MyApp, Version: 1.0.1, API URL: https://api.myapp.com
