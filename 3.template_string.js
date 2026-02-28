// Template string
let name = "Md Shakibul Islam";
let working = "Full Stack web developer";
let age = 19;

// Ternary Operator --> condition? ture: false;

// Template string a dynamic value add kora jay. and single statement use  not a condition uese
let aboutMe = `
    Hello Iam ${name}. Iam a Student. Iam ${age} years old. I am current working at ${working}
    
    ${age > 18 ? "Iam adult" : "Iam not adult"}
`;
console.log(aboutMe);
