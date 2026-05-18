// Logical Operators in JavaScript
// And (&&) operator: all conditions must be true

const age = 25;
const gender = "male";

if (age >= 18 && gender == "male") {
    console.log("You are an adult male.");
}

// Or (||) operator: at least one condition must be true

const isStudent = true;
const hasDiscount = false;

if (isStudent || hasDiscount) {
    console.log("You are eligible for a discount.");
}

// Not (!) operator: negates the condition

const isRaining = false;

if (!isRaining) {
    console.log("It's a nice day outside!");
}