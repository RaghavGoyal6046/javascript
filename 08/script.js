// arrow functions in javascript

// 1.Syntax of arrow function
// const functionName = (parameters) => {
//     // function body
// }

// 2. Example of arrow function
const greet = (name) => {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // calling the function with different arguments
greet("Bob");

// 3. Arrow function with implicit return
const add = (a, b) => a + b; //oneliner arrow function with implicit return 

console.log(add(5, 3)); // calling the function with different arguments

// arguments object is not available in arrow functions, but we can use rest parameters to achieve similar functionality

const addNumbers = (...numbers) => {
    let ans = 0;
    for (let i = 0; i < numbers.length; i++) {
        ans += numbers[i];
    }
    return ans;
}

console.log(addNumbers(1, 2, 3, 4, 5)); // calling the function with different arguments

// hoisting in arrow functions
// arrow functions are not hoisted, which means they cannot be called before they are defined

// console.log(greet("Alice")); // this will throw an error because greet is not defined yet

const greet = (name) => {
    console.log("Hello, " + name + "!");
}

console.log(greet("Alice")); // this will work because greet is defined before it is called 

// this keyword in arrow functions

const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }
}

person.greet(); // this will work because this refers to the person object

const person2 = {
    name: "Bob",
    greet: () => {
        console.log("Hello, " + this.name + "!");
    }
}

person2.greet(); // this will not work because this does not refer to the person2 object in arrow functions