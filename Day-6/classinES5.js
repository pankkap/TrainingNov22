// ES6 Approch for creating class and Objects
class Person {
    constructor() {
        // properties
        this.name = "manish";
        this.age = 30;
    }
        // methods
        details() {
            // return "Name: " + this.name + " " + " Age: " + this.age;
            // Template String
            return `Name: ${this.name} Age: ${this.age}`
     
    }
}

var p1 = new Person();
// p1.name = "abc"
console.log( p1.details());