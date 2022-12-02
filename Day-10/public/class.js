class Employee {
    constructor(empId, empName) {
        this.empId = empId;
        this.empName = empName;
        this.empId = empId;
        this.empName = empName;
    }
}
let employees = [];
class Development extends Employee {
    constructor(id, name, sal) {
        super(id, name);
        this.salary = sal;
    }
    details() {
        console.log(`EmpCode: ${this.empId}\nEmp Name: ${this.empName}`);
    }
    dispSalary() {
        console.log("Emp Salary: ", this.salary);
    }
}
let dev1 = new Development(105, "Kamal", 50000);
dev1.details();
dev1.dispSalary();
