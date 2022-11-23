let arr = [1,2,3,4,5]
// a = arr[0]
// b = arr[1]
// c = arr[2]
// d = arr[3]
// e = arr[4]

// Destructuring Arra
// let [a,b,c,d,e]  = arr;

// Skipping some elements in Destructing arra
let [a,,,d,e] = arr;
// console.log(c);
console.log(e);


// Destructure Object

let person = {
    name:"Sachin",
    age:30,
    mobile:878678,
    email:'abc@gmail.com',
    city:{
        pincode:1100011,
        street:'abc'
    }
}

// console.log(person.city.street);
// console.log(person.name);
// console.log(person.email);
// console.log(person.mobile);

// destructure Object
let {name, age, mobile, email, city} = person

console.log(city.street);
console.log(name);
console.log(email);
console.log(mobile);