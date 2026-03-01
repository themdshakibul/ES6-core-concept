// Rest operator ***
function myfunction(a, b, c, d, e, f, ...my) {
  console.log(a, b, c, d, e, f, ...my);
}

// myfunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 22);

// Spread operator  ***
// Array
let array = [1, 2, 3, 4, 5, 6];
// console.log(...array);
const array2 = [...array]; // Copy independently

// Max and Main
console.log(array.Math.max(...array));

// Object
// Spread operator diye array thek arakta copy korte parbo
const obj = {
  name: "Md Shakibul Islam",
  roll: 24,
};
const obj2 = { ...obj }; // Copy independently
// const obj2 = obj;

obj.name = "Md Shakibul Islam Shakib";
obj.roll = 25;

// console.log(obj);
// console.log(obj2);

