// Arry destructure
let arr = [10, 30, 20, 40, 60, 70, 80];
// let ten = arr[0]; // 10
// let forty = arr[3]; // 40

// console.log(ten, forty);
console.log(...arr);
// let [ten, , , forty, , , seventy] = arr;
// console.log(ten, forty, seventy)

// Object destructure
let person = {
  name: "Shakibul",
  roll: 24,
  address: {
    city: "Manikgonj",
    country: "Bangladesh",
    street: {
      roadNumber: "18 Kb",
      postCode: "1660",
    },
  },
  isMarride: false,
  isMillioner: true,
  homeTown: null,
  hobby: ["programing", "Traveling", "Reading"],
};

// let name = person.name;
// let roll = person.roll;

// console.log(name, roll);
let {
  name: names,
  roll: nong,
  address: {
    city,
    country: myCountry,
    street: { roadNumber, postCode },
  },
  isMarride,
  isMillioner,
  hobby,
} = person;

//! output

console.log(
  names,
  nong,
  city,
  myCountry,
  isMarride,
  isMillioner,
  roadNumber,
  postCode,
  hobby,
);
