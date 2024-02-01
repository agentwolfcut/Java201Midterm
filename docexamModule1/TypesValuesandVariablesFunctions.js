// 1. // Types, Values, and Variables/ Functions 
// Instruction: - Write function findMin(arr) : Find min number in an array : Return min number 
// Initiate code:  
let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7]; 
console.log(findMin(arr));// 1 
function findMin(arr) {
    return Math.min(...arr);
}



// 2. // Types, Values, and Variables 
// Instruction: - Convert numString to an integer and store it in a new variable num. 
// Initiate code:  
// XXXXX is your code  

let numString = "1234";
let num = parseInt(numString);
console.log(typeof num); // Number



// 3. // Types, Values, and Variables/ Arrays 
// Instruction: - Write code to swap their values using array destructuring. 
// Initiate code:  
// XXXXX is your code 
let a = 5, b = 10; 
[b,a] = [a, b]; 
console.log(a); // 10 
console.log(b); // 5 


// 4. // Types, Values, and Variables/ Arrays 
// Instruction: - Check if arrays are empty. 
// Initiate code:  

let value1 = [1, 2, 3];
let value2 = [];
let value3;
console.log(value1.length !== 0); // value1 false
console.log(value2.length === 0); // value2 true
console.log(value3 !== undefined && value3.length !== 0); // value3 false



// 5. // Types, Values, and Variables/ Arrays 
// Instruction: - Write code to display only the object elements in the mixedArray. 
// Initiate code:  

let mixedArray = [
  42,
  "hello",
  { name: "Joe", surname: "Doe" },
  true,
  56,
  false,
  { name: "John", surname: "Smith" },
  { name: "Joy", surname: "Stein" },
];

for (let element of mixedArray) {
  if (typeof element === "object" && element !== null) {
    console.log(element);
  }
}


// 6. // Types, Values, and Variables/ Expressions, Operators, and Control Structures 
// Instruction: - No coding, What is result and type of result ? 
// Initiate code:  
// XXXXX : What is you think about result 
let x = 10; 
let y = "20"; 
let result = x + y; 
console.log(result); // "1020"
console.log(typeof result); // String 

