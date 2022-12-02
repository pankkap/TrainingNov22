abstract class Employee {
    // properties
    // private empId: number;
    // private empName: string

    constructor(protected empId:number, protected empName:string){
        this.empId = empId
        this.empName = empName
    }

    // method
    abstract details():void
}

// let emp1 = new Employee(101, "Sachin")
// let emp2 = new Employee(101, "Sachin")

let employees:Employee[]  = [];
// employees.push('hello')
// employees.push(emp1)
// employees.push(emp2)
// console.log(emp1.details());

// emp2.empId  =102
// emp2.empName = "Manish"
// console.log(employees);


// Access Specifier
// 1. public
// 2. private
// 3. protected

class Development extends Employee
{
    private salary:number;
    constructor(id:number, name:string, sal:number)
    {
        super(id, name);
        this.salary = sal
    }
    details(): void {
        console.log(`EmpCode: ${this.empId}\nEmp Name: ${this.empName}` );
    }
    dispSalary(){
        
        console.log("Emp Salary: ", this.salary);
    }
}

let dev1 = new Development(105, "Kamal", 50000);
dev1.details()
dev1.dispSalary()
