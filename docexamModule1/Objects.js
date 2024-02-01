// 7. // Objects
// Instruction: - Create an object person with properties: name (a string), age (a number), and
// isStudent (a boolean).
// 7.1 Add a new property hobbies, an array of strings, to the person object.
// 7.2 Change the age property to a new value.
// 7.3 Delete the isStudent property.
// Initiate code:

let person = {
  name: "John",
  age: 25,
  isStudent: true,
};

// 7.1
person.hobbies = ["reading", "traveling"];

// 7.2
person.age = 30;

// 7.3
delete person.isStudent;

// 8. // Expressions, Operators, and Control Structures
// Instruction: - No coding, What is the result of the code below, and why is it displayed?
// Initiate code:
// // XXXXX : What is you think about result

if (1) {
  console.log(1); // 1
}
if ([]) {
  console.log([]); // []
}
if ("") {
  console.log(""); // (nothing)
}
if (null) {
  console.log(null); // (nothing)
}
if (undefined) {
  console.log(undefined); // (nothing)
}

// 9. // Expressions, Operators, and Control Structures / Objects
// Instruction: - Compare three objects with name properties (case-insensitive).
// Initiate code:
// // XXXXX is your code

let peopleObj1 = { name: "John", surname: "Doe" };
let peopleObj2 = { name: "Sarah", surname: "Wilson" };
let peopleObj3 = { name: "David", surname: "Brown" };

if (
  peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() &&
  peopleObj2.name.toLowerCase() === peopleObj3.name.toLowerCase()
) {
  console.log("These three objects have the same name.");
}
