// 16. // Expressions, Operators, and Control Structures 
// Instruction: - Create a function named multiplicationTable(number) that generates a multiplication 
// table based on the provided number. The function should return the results as an array 
// of strings. 
function multiplicationTable(number) {
    let table = [];
    for (let i = 1; i <= 12; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
    }
    return table;
}

console.log(multiplicationTable(2));
 
output 
"2 x 1 = 2", 
"2 x 2 = 4", 
"2 x 3 = 6", 
"2 x 4 = 8", 
"2 x 5 = 10", 
"2 x 6 = 12", 
"2 x 7 = 14", 
"2 x 8 = 16", 
"2 x 9 = 18", 
"2 x 10 = 20", 
"2 x 11 = 22", 
"2 x 12 = 24", 



// 17. // Expressions, Operators, and Control Structures / Arrays /  Arrays Functions / 
// Functions 
// Instruction: - Create a function calculateGrade(scores) that takes an array of numerical scores and 
// returns the corresponding letter grade (A, B, C, D, or F) based on the average score. 
// 17.1 Calculate the average score. 
// 17.2 Based on the average score, determine the letter grade: 
// • 90-100: A 
// • 80-89: B 
// • 70-79: C 
// • 60-69: D 
// • Below 60: F 
// Return the letter grade. 

function calculateGrade(scores) {
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}

console.log(calculateGrade([80, 95, 90, 70, 100])); // Output: B

 

// 18. // Expressions, Operators, and Control Structures / Functions 
// Instruction: - Write a JavaScript function convertTemperature that converts a temperature from 
// Fahrenheit to Celsius, or from Celsius to Fahrenheit, based on a mode parameter. 
// 18.1 The function should accept two arguments: temperature (a number) and mode (a 
// string). The mode argument can be either 'FtoC' for Fahrenheit to Celsius conversion or 
// 'CtoF' for Celsius to Fahrenheit conversion. 
// 18.2 Implement the conversion logic: 
// • Fahrenheit to Celsius: (temperature - 32) * 5/9 
// • Celsius to Fahrenheit: (temperature * 9/5) + 32 
// 18.3 Return the converted temperature as a number If the mode is neither 'FtoC' nor 
// 'CtoF', return a message 'Invalid mode. Please use "FtoC" or "CtoF"'. 
// Initiate code: 
// Insert your code here 
function convertTemperature(temperature, mode) {
    if (mode === 'FtoC') {
        return (temperature - 32) * 5 / 9;
    } else if (mode === 'CtoF') {
        return (temperature * 9 / 5) + 32;
    } else {
        return 'Invalid mode. Please use "FtoC" or "CtoF"';
    }
}

console.log(convertTemperature(68, 'FtoC'));  // Output: 20
console.log(convertTemperature(20, 'CtoF'));  // Output: 68
console.log(convertTemperature(100, 'Unknown'));  // Output: Invalid mode. Please use "FtoC" or "CtoF"

 
 
// 19. // Expressions, Operators, and Control Structures / Arrays /  Arrays Functions / 
// Functions 
// Instruction: - Write a JavaScript function, sumPositiveNumbers(numbers), that calculates the sum 
// of all positive numbers in an array. The function should return the sum of positive 
// numbers. If the array is empty or contains no positive numbers, the function should 
// return 0. 
// Task 19
function sumPositiveNumbers(numbers) {
    return numbers.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // Output: 42
console.log(sumPositiveNumbers([-1, -2, -3])); // Output: 0
console.log(sumPositiveNumbers([])); // Output: 0
