// 10. // Arrays / Arrays Functions / Objects 
// Instruction: - Display all the names of people objects (case-insensitive) that have the same name; 
// return an array of strings with the names that are the same. 
// Initiate code: 
// // XXXXX is your code 
let people = [ 
{ name: "John", surname: "Doe" }, 
{ name: "olivia", surname: "Smith" }, 
{ name: "john", surname: "Johnson" }, 
{ name: "Sarah", surname: "Wilson" }, 
{ name: "David", surname: "Brown" }, 
{ name: "Emily", surname: "Davis" }, 
{ name: "David", surname: "Miller" }, 
{ name: "Olivia", surname: "Taylor" }, 
{ name: "david", surname: "Anderson" }, 
{ name: "Sophia", surname: "Clark" } 
]; 

let namesSet = new Set();
let duplicateNames = [];

for (let person of people) {
    let lowerCaseName = person.name.toLowerCase();
    if (namesSet.has(lowerCaseName)) {
        duplicateNames.push(lowerCaseName);
    } else {
        namesSet.add(lowerCaseName);
    }
}

console.log(duplicateNames);



// 11. // Types, Values, and Variables 
// Instruction: - No coding, What is the result of the code below, and why is it displayed? 
// Initiate code:  
// // XXXXX : What is you think about result 
const arr = [1, 2, 3]; 
arr.push(4); // run ได้ เพราะเพิ่มค่า่ไว้สุดท้ายของarray
arr = [1, 2, 3, 4]; // error เพราะ ไปเปลี่ยนค่า const
const obj = { name: 'Alice' }; 
obj.age = 30; // run ได้ เพราะเปนการเพิ่มค่า age 30 
obj = { name: 'Alice', age: 30 }; // error เพราะเปลี่ยนค่าconst


// 12.// Functions / Arrays /  Arrays Functions 
// Instruction: - Write a function uniqueElements(arrayValue) to return array of the unique elements 
// from an array. 
// Initiate code: 

function uniqueElements(arrayValue) {
    return [...new Set(arrayValue)];
}
let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
numbers = uniqueElements(numbers);
console.log(numbers); // [1, 3, 8, 21, 13, 7]

// array numbers after use function uniqueElements will be [1, 3, 8, 21, 13, 7]