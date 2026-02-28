// scope -->  সীমানা

// 3 type of scpoe --> 1. Global scpoe, 2. Block scpoe, 3. Fucnction scope

// 1. Global scope --> হলো জে কোন জাইগা থেকে অ্যাক্সেস করা যায়
// var test = "test";
// const test = "test"; //  fixed value
let test = "test";

if (true) {
  console.log(test);
}
for (let i = 0; i < 5; i++) {
  console.log(test);
}

// Block scope --> var এর বাহিরে থেকে অ্যাক্সেস করা যায় | কিন্তু let বাহিরে থেকে অ্যাক্সেস করা যায় না
// var not mantains block scope
// let and const maintains block scope
{
  var test1 = "test1";
  let test2 = "test2";
}

// Example:
if (true) {
  var test1 = "test1";
  let test2 = "test2";
}

// console.log(test1); // access kora jay
console.log(test2); // let, const not access

// Function and local scope --> Fucnction এর ভিতরে জাই লিখি বাহিরে থেকে অ্যাক্সেস করতে পারবো না
// var, let, and const all are maintaing function scope

function myFunc() {
  //   var test3 = "test3";
  //   let test4 = "test4";
  const test5 = "test5";
}

myFunc();
// console.log(test3); // no access
// console.log(test4); // not access
// console.log(test5); // not access
