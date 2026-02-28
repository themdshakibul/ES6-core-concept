function multiply(a, b) {
  const result = a * b;
  return result;
}

const output = multiply(5, 5);
// console.log(output);

//! Defoald pera meaters
function multiplys(a = 1, b = 1) {
  const result = a * b;
  return result;
}

const total = multiplys(10);
console.log(total); // 200
