// 13. // Functions / Arrays /  Arrays Functions 
// Instruction: - Write a function reverseArray(arrayValue) to reverse an array. 

function reverseArray(arrayValue) {
  return arrayValue.reverse();
}
let number = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
number = reverseArray(number);
console.log(number); // [7, 8, 3, 13, 8, 21, 8, 3, 1, 1]

// console.log(numbers.reverse(numbers))
// return value will be [7, 8, 3, 13, 8, 21, 8, 3, 1, 1] 


// 14. // Expressions, Operators, and Control Structures / Arrays /  Arrays Functions 
// Instruction: - Given an array of objects, use destructuring to extract and display all properties from 
// each object. 
// Initiate code: 
// XXXXX is your code 

const users = [
  { id: 1, name: "John", age: 28 },
  { id: 2, name: "Jane", age: 32 },
  { id: 3, name: "Dave", age: 24 },
];

users.forEach(({ id, name, age }) => {
  console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
});


// 15. // Expressions, Operators, and Control Structures / Arrays 
// Instruction: - Destructure the first two elements and the last element of an array into new variables. 

const numbers = [1, 2, 3, 4, 5];
const [first, second, , , last] = numbers;
console.log(first, second, last);


// 20. // Expressions, Operators, and Control Structures / Arrays /  Arrays Functions / 
// Functions 
// Instruction: - Write a JavaScript function sameNumbers(numArray1, numArray2) to receive two 
// arrays of numbers and return an array that contains the numbers from both arrays 
// without repeating numbers. 
// Initiate code: 
// Insert your code here 

function sameNumbers(numArray1, numArray2) {
  return [...new Set([...numArray1, ...numArray2])];
}

console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8]));
// Output: [1, 2, 3, 4, 5, 8, 47, 56]
