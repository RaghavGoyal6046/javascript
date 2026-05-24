const students = ["piyush", "satyarth", "rishabh", "satyam"];
console.log(students);

students[2] = "rishabh gupta";
console.log(students);

students.push("satyarth gupta");
console.log(students);

students.pop();
console.log(students);

students.unshift("piyush gupta");
console.log(students);

const myaarr=[1,true,"hello",null,undefined,{name:"piyush"},[1,2,3]];
console.log(myaarr);

console.log(students.length);  
console.log(students[0]);
console.log(students[students.length - 1]);

console.log(students.indexOf("satyarth"));

students.reverse();

// high order functions in arrays
students.forEach((student) => {
    console.log(student);
});

const upperCaseStudents = students.map((student) => {
    return student.toUpperCase();
});
console.log(upperCaseStudents);
//difference between forEach and map is that forEach does not return a new array, it simply executes the provided function once for each array element, while map returns a new array with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5];
let ans=numbers.find((num) => num ===3);
console.log(ans);
let ans1=numbers.findIndex((num) => num ===3);
console.log(ans1);

// slice and splice
const arr1 = [1, 2, 3, 4, 5];
const slicedArr = arr1.slice(1, 4); // returns a new array from index 1 to index 3 (4 is not included)
console.log(slicedArr); // Output: [2, 3, 4]

const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 3); // removes 3 elements starting from index 2
console.log(arr2); // Output: [1, 2]


