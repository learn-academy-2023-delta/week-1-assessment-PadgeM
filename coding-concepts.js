// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 console.log(colors.push("indigo"))

// a) Your answer: This will put the string "indigo" into the variable colors.  When logged, it will show 5 showing that the array called colors now has 5 strings inserted instead of 4.
// b) Verify and explain: When I logged this into the terminal with the node command it showed 5 confirming what I thought.  Again, this is just showing us how many data values are now in the array after it pushes the string "indigo" into it.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: This will show us the length of the string "LEARN 2023".
// b) Verify and explain:
// I logged the method and it came back as 10. 10 is the amount of characters in the string including the quotations on either side.
// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: This will return "o"
// b) Verify and explain: We get the "l" in the string "Hello World" because when logged the 4 in the parameter [] tells the log to find the fourth index and since the index starts at zero which would be the "H" and the fourth would be the first "o" that it would be the output.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: This will show us "Ruby"
// b) Verify and explain:The reason we get ruby is this, we defined a const which declares the variable index = "Whatever value here" when logged whatever value is in the index will determine what value is returned. We place 1 there and so it counts from index 0 to index 1 to find that value or in this case string "Ruby".  

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase()) //TypeError: weekendDays.toUpperCase is not a function

// a) Your answer: This will output an error 
// b) Verify and explain: this resulted in a error because we can't use this code as it is. We can't use the .toUpperCase on an array instead we would need to use a for loop to solve this problem. I did have to research this problem because I couldn't understand this on my own.  

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: This will log the string "number"
// b) Verify and explain: The reason why this show number is that the typeof operator will always show a string and when used in tandem with the .length method will show the first string in the index which is "number".  I'm gonna be honest, I had to research this one as well cause I didn't fully understand why the typeof does that.
