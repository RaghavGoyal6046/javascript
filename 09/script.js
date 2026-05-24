// high order functions
// A high order function is a function that takes another function as an argument or returns a function as a result.

// Example of a high order function that takes another function as an argument
function greet(name, callback) {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}

function printGreeting(greeting) {
    console.log(greeting);
}

greet("Alice", printGreeting); // Output: Hello, Alice!

function add(a,b,cb){
    let ans = a + b;
    cb(ans);    

}
add(5,3,(result) => {
    console.log("The sum is: " + result);
});     //explaination: In this example, the add function takes two numbers and a callback function as arguments. It calculates the sum of the two numbers and then calls the callback function with the result. The callback function is defined as an arrow function that takes the result as an argument and logs it to the console.

// Example of a high order function that returns a function

function multiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// In this example, the multiplier function takes a factor as an argument and returns a new function that multiplies its input by that factor. The double and triple functions are created by calling multiplier with different factors, and they can be used to multiply numbers by 2 and 3, respectively.     

function sum(a,b,cb){
    let ans = a + b;
    cb(ans);    
    return ()=>console.log(ans);
}

const result=sum(5,3,()=>{}); // Output: The sum is: 8 
result(); // Output: 8

// In this example, the sum function takes two numbers and a callback function as arguments. It calculates the sum of the two numbers, calls the callback function with the result, and then returns a new function that logs the result to the console when called. The result variable holds the returned function, which can be called later to log the sum.
