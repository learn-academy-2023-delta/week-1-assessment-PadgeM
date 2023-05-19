// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code: 
// 1. I have to make a function that will compare what string has a larger character count.
// 2. I have to make a conditional statement with the if and else functions. 
    // a. If string1 is greater than string2 then return string1
    // b. If string1 equals string2 then return "They're equal!"
    // c. and if none of those are true then return string2
//3. Console log both variable sets to see if the code returns the right values.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const largerFruit = (string1, string2) => {
if (string1.length > string2.length) {
  return string1}
else if (string1.length === string2.length) {
  return ("They're equal!")}
else {
  return string2
}
}
console.log(largerFruit(fruit1,fruit2)) //banana
console.log(largerFruit(fruit3, fruit4))//cherry
// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// 1. I need to make a function that will tell me if a value is above, below, or at the boiling point.
// 2. I need to make a conditional statement within this function to guide the code.
  // a. I must first define the variables with the correct value.
  // b. I make a const statement defining bp is 212 and t stands for each temperature value that we will input.
  // c. I then make a conditional statement that says if t is greater than bp return with "t is above boiling point". else if t is strictly equal to bp then return with "t is at boiling point", then if it either of those are untrue. If t is below bp then return with "t is below boiling point."
  // d. Now I make one last condition, if none of those are true then it will respond with "Something went wrong"

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"
const bp = 212

const boilingPoint = (t) => {
  if (t > bp ) {
    return `${t} is above boiling point`
  }
  else if (t === bp) {
    return `${t} is at boiling point`}
  else if (t < bp)
    return `${t} is at boiling point`
  else {
    return "Something went wrong"
  }
  }
  console.log(boilingPoint(temperature1)) // Output: "42 is below boiling point"
  console.log(boilingPoint(temperature2)) // Output: "350 is above boiling point"
  console.log(boilingPoint(temperature3)) // Output: "212 is at boiling point"
// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// 1. First I must define the arrays. 
// 2. Once I have done this I will use the .concat method to define each array into a new array called combinedRuns.
// 3. Now I must make a variable that will use the .length method to count the amount of data that is in our new combined array combinedRuns and we will name it combinedRunsLength.
// 4. Now I use the console.log method to log the value of combinedRunsLength which should output 9

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const combinedRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);

const combinedRunsLength = combinedRuns.length;

console.log(combinedRunsLength); // Output: 9



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// 1. So first I have to make an empty string called "reversedString"
// 2. Now I need to make a for loop that will run the string from the last index to the first index.
  // a. I set i to be the currentCohort.length - 1 to force the index to start at the last character in the string.
  // b. Then I must tell the loop to keep going until there are no more characters to go through. I think it's by using i >= 0. This means if i is greater than or equal to zero keep going through loop.
  // c. The next thing I have to do is tell the loop how we want to move through the loop by using i--.  This will tell the loop to keep going backwards one by one.
  // 3. Now we tell reversedString to use the concat operator to add the characters from the currentCohort with the new index which should start us at the end of the string. Giving us the output = 3202 atleD

const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"

let reversedString = "";
for (let i = currentCohort.length - 1; i >= 0; i--) {
  reversedString += currentCohort[i];
}

console.log(reversedString); // Output: "3202 atleD"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// 1. in this code I need to make a variable called lastIndex1 that will use the method .lastindexOf(givenValue1), this will give me the last index of the given value.  This should be seven since the last index location this value is at is seven.
// 2. Now I will log this to run the variable, the output should be seven.
// 3. I will do the same as before but this time I will use givenValue2 instead to have the console log the last index of 10, meaning it will search for the last spot this value was at. The output should be eight

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const lastIndex1 = numberOfConnections.lastIndexOf(givenValue1);

console.log(lastIndex1); // Output: 7

const lastIndex2 = numberOfConnections.lastIndexOf(givenValue2);

console.log(lastIndex2); // Output: 8


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// 1. I need to make a function that will sort the temps in reverse order.  I will use the .sort method and the arrow function to have it spit out the temperatures in descending order.
// 2. I will now sort the values with the console log.
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoSummerTemperatures.sort((a, b) => b - a);

console.log(sanDiegoSummerTemperatures); // Output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoWinterTemperatures.sort((a, b) => b - a);

console.log(sanDiegoWinterTemperatures); // Output: [68, 67, 66, 66, 62, 59, 59]
