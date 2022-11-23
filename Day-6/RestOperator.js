// Rest operator | Packing data
function display(x,y,...data)
{
console.log(x);
console.log(y);
console.log(data);
}

display(1,2,3,4,5,6,7,8,9,10,11,12)


// Spread Operator  | Unpacking the data
let odd = [1,3,5]
let combinedArr1  = [2,4,6, odd[0], odd[1],odd[2]]
let combinedArr2  = [2,4,6, ...odd]
console.log(combinedArr1);
console.log(combinedArr2);