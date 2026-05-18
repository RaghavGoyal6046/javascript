// Loops in JavaScript
// For loop:- used when the number of iterations is known beforehand
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop: used when the number of iterations is not known and the loop needs to continue until a certain condition is met
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Do-while loop: similar to the while loop, but guarantees that the loop body will be executed at least once, even if the condition is false at the beginning
// real life example of do-while loop:- asking for user input until valid input is received
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// guess the number game using do-while loop
const secretNumber = 7;
let guess;

do {
    guess = parseInt(prompt("Guess the secret number between 1 and 10:"));
    if (guess == secretNumber) {
        alert("Congratulations! You guessed the secret number!");
        break;
    } else {
        alert("Wrong guess. Try again!");
    }
} while (guess !== secretNumber);