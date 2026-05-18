// Conditional Statements in JavaScript

// ladder if-else statement
const age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("Congratulations on reaching adulthood!");
} else {
    console.log("You are an adult.");
}
// ternary operator
const isAdult = age >= 18 ? "Yes, you are an adult." : "No, you are a minor.";
console.log(isAdult);

// switch statement
const dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day of the week.");
}       

