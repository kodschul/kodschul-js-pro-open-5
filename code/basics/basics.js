let name = process.argv[2];
let age = Number(process.argv[3]);

console.log(`Hi ${name}, du bist ${age} Jahre alt!`);
console.log("Hi " + name + ", du bist " + age + " Jahre alt!");

// type conversions

let x = "10,5".replace(",", ".");

console.log(parseFloat(x));
