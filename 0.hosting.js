// var is hoisted, but only the declaration, not the value assignment
console.log(test); // undefined
var test = 123;
console.log(test); // 123

// let and const also hoisted, but not ainitialization. They are in a "Temporal Dade Zone TDZ" form the start of the block until the declaration line.
// console.log(name); runtime error
let name = "Md Shakibul Islam";
console.log(name);

// console.log(age); // runtime error
const age = 25;
