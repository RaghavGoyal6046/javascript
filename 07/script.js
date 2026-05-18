// Function in JavaScript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");// calling the function with different arguments
greet("Bob");
//            arguments
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); //parameters

let result = add(10, 20);
console.log(result);


// using arguments object to add multiple numbers
function addNumbers() {
    let ans=0;
    for (let i=0;i<arguments.length;i++){
        ans+=arguments[i];
    }
    return ans;     

}
console.log(addNumbers(1, 2, 3, 4, 5)); // calling the function with different arguments

// spread operator to add multiple numbers
function addMultiple(...raghav) {
    let ans = 0;
    for (let i = 0; i < raghav.length; i++) {
        ans += raghav[i];
    }
    return ans;
}

console.log(addMultiple(1, 2, 3, 4, 5)); // calling the function with different arguments