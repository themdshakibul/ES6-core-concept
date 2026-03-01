// Traditional function is hosted, but arrow fucntion is not
console.log("Multiplication -->", multiply(10, 5));

function multiply(a, b) {
  return a * b;
}

// const output = multiply(10, 5);
// console.log(output); // 50

// Example --> 2

// console.log("Multiplication --> ", multiplyFunc(7, 10)); // akta variable ar rakhchi tai age thke access kora jay na
let multiplyFunc = function multiply(a, b) {
  return a * b;
};
console.log("Multiplication --> ", multiplyFunc(6, 9));

// Arrow fucntion --> not hosted
const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 5));

//  Arrow fucntion sort vertions
const numbers = (a, b) => a + b; // Implicitly return
const sqr = (a, b) => a * a;

console.log(numbers(10, 20));
console.log(sqr(5));

//  This optional
function myFcuntionNormal() {
  console.log(this);
}
console.log(myFcuntionNormal());

// Example Arrow fucntion
const myFcuntionArrow = () => {
  console.log(this);
};

myFcuntionArrow();

// Object
let person = {
  name: "Md Shakibul Islam",
  age: 19,
  // Traditional fucntion
  showMyInfo: function () {
    // console.log(person.name); // Md Shakibul Islam
    // this same Object return
    console.log(this.name); // Md Shakibul Islam
  },
};

person.showMyInfo();

// Arrow fucntion

let persons = {
  name: "Md Shakibul Islam",
  age: 19,
  // Traditional fucntion
  showMyInfo: () => {
    // this same Object return
    console.log(this.name); // undefine
  },
};

persons.showMyInfo();
