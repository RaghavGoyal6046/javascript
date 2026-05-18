// Data types in JavaScript
// Number
let num1 = 42;
console.log(num1); // Output: 42
let num2 = 3.14;
console.log(num2); // Output: 3.14

console.log(num1 + num2); // Output: 45.14

// String
let name = 'Raghav';
const lastName = "Goyal";
console.log(name); // Output: Raghav
console.log(lastName); // Output: Goyal

const fullName = name + " " + lastName;
console.log(fullName); // Output: Raghav Goyal

// Boolean
let isStudent = true;
let isEmployed = false;
console.log(isStudent); // Output: true
console.log(isEmployed); // Output: false

// Null and Undefined
let emptyValue = null;
emptyValue = "Now it has a value";
console.log(emptyValue); // Output: Now it has a value

let last_login=undefined; // This variable is declared but not assigned a value, so it is undefined.donot use space in variable name
console.log(last_login); // Output: undefined

// Object
const person = {
    name: "Raghav",
    age: 22,
    city: "Delhi",
    isStudent: true,
    last_login: null,
};
console.log(person); // Output: { name: 'Raghav', age: 22, city: 'Delhi', isStudent: true, last_login: null }  }
console.log(person.name); // Output: Raghav
console.log(person.age); // Output: 22
console.log(person.city); // Output: Delhi

console.log(person.isStudent); // Output: true
console.log(person.last_login); // Output: null

// operator

let x = 5;
let y = 10;

// Arithmetic Operators
console.log(x + y); // Output: 15
console.log(x - y); // Output: -5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 0.5
console.log(x % y); // Output: 5

// Comparison Operators
console.log(x > y); // Output: false
console.log(x < y); // Output: true
console.log(x >= y); // Output: false
console.log(x <= y); // Output: true
console.log(x === y); // Output: false
console.log(x !== y); // Output: true

// Logical Operators
console.log(x > 0 && y > 0); // Output: true
console.log(x > 0 || y < 0); // Output: true
console.log(!(x > 0)); // Output: false

let isloggedIn = true;
console.log(isloggedIn+10); // Output: 11 (because true is treated as 1 in arithmetic operations)

// string concatenation
console.log('1'+'2'); // Output: 12 (string concatenation  )
console.log('1'+2); // Output: 12 (string concatenation  )
console.log(1+'2'); // Output: 12 (string concatenation  )
console.log(1+2); // Output: 3 (arithmetic addition)

// string * number=number
console.log('3'*2); // Output: 6 (string '3' is converted to number 3 and then multiplied by 2)
console.log('3'*'2'); // Output: 6 (both strings are converted to numbers and then multiplied)
console.log('three'*2); // Output: NaN (string 'three' cannot be converted to a number, resulting in Not-a-Number)

// typeof operator
console.log(typeof num1); // Output: number
console.log(typeof name); // Output: string
console.log(typeof isStudent); // Output: boolean
console.log(typeof person); // Output: object
console.log(typeof last_login); // Output: undefined