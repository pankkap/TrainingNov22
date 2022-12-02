let arr1 = ["pankaj", "sachin", "Ankur", "Manish"]
// arr1.push(123)
let arr2 = [11,22,33,44,55]
arr2.push(66)
console.log(arr2);

let arr3 = ["abc", "xyz", 11, 22, 1.2, "Ankur", "Shilpi"]
arr3.push(12)
arr3.push("12")
// arr3.push(true)


// Explicit Array
let arr4:number[]=[];
arr4[0] = 2;
arr4[1] = 4;
arr4.push(3);
console.log(arr4);

let a:string[];
a = ["a",'b','c','d']
console.log(a);


// Explicite Mixed Array 

let mixArr:(number|string)[] = ["abc", "sdsd", 323, 0.2, 6.4];
mixArr.push("$545");
mixArr.push(3.21);
// mixArr.push(true);
