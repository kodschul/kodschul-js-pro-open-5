let name = process.argv[2];
// let age = process.argv[3];
let age = undefined;
// let age = Number(process.argv[3]);

let numbers = [1, 2, 3];
console.log(numbers.constructor === Array);

if (typeof age == "" || age.constructor == String) {
  age = Number(age);
  console.log(`converted to int ${age} `);
}

console.log(`Hi ${name}, du bist ${age} Jahre alt!`);
console.log("Hi " + name + ", du bist " + age + " Jahre alt!");

// type conversions

let x = "10,5".replace(",", ".");

console.log(parseFloat(x));
