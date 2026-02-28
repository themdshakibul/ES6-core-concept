// Difference 1 ...........
// var hoisted (Bad practice)
// let and const hoisted but in TDZ --> Temporal Dade Zone

// Difference 2 ...........

// var আকই নামে ভারিয়েবল Diclear করা যায় ।

var name = "Shakibul";
var name = "Rakibul";

// console.log(name);

// Example:
// কিন্তু let দিয়ে একই নামে ভারিয়েবল Diclear করা যায় না ।
// let roll = 24;
// let roll = 24;
// const age = 19;
// const age = 19;

// Difference 3 ...........
// var and let দিয়ে ভারিয়েবল ডিক্লেয়ার করলে ভেলু রি Assigin kora jay
// reassign allowed by var and let but not const

var nationality = "Bangladesh";
nationality = "America";
console.log(nationality);

let age = 18;
age = 18;
console.log(age);

// const diye variable Diclear korle value change kora jay na
const name = "Md Shakibul Islam";
// name = "Shakib"; // Re Assigin kora jay na
console.log(name);

// Difference 4 ...........
// scope
// var maintains only fucnction scope, but not block scope or Global scope
// let and const maintain all scope
