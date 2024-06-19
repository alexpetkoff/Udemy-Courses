class Department {
    private id: string;
    public name: string; // public is the default! not mandatory to initialize a prop with public infront!
    private employees: string[] = []; //private means the method is not accessible outside the class Department.

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }

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

let accounting = new Department("Accounting", " ID: 01");

accounting.describe();

// let accountingCopy = {
//     name: "DUMMY",
//     id: " ID: 02",
//     describe: accounting.describe,
// };

// accountingCopy.describe();

accounting.addEmployee("Aleks");
accounting.addEmployee("Pesho");

accounting.printEmployeeInfo();
