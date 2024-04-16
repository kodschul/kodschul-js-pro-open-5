// objects

const personen = {
  alice: { name: "Alice", alter: 30 },
  bob: { name: "Bob", alter: 25 },
  carol: { name: "Carol", alter: 35 },
};

let ageSum = Object.values(personen).reduce(
  (total, person) => person.alter + total,
  0
);

let totalAge = 0;
for (const personName in personen) {
  let person = personen[personName];
  totalAge += person.alter;
}

console.log({ ageSum, totalAge });

console.log(totalAge / Object.keys(personen).length);

process.exit(0);
let person = {
  name: "Max",
  age: 18,
  hobbies: "playing",
};

let personKeys = Object.entries(person);
console.log(personKeys);

for (const key in person) {
  console.log(key, person[key]);
}

process.exit(0);

// while-loop

let i = 0;

while (i < 5 && i != 3) {
  console.log(i);

  i++;
}

// arrays

const fruits = ["Apfel", "Banane", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

let fruits3 = fruits.filter((fruit) => fruit[0] == "A");
console.log(fruits3);

fruits.forEach((fruit) => {
  fruit = "deleted";
  console.log(fruit);
});

let fruits2 = fruits.map((fruit) => fruit.toUpperCase()[0]);

let nums = [1, 2, 3, 4, 5];

let total = nums.reduce((total, num) => total + num, 0);
console.log(total);

let evenNums = nums.filter((num) => num % 2 == 0);

console.log(nums, evenNums);

let numsSquared = nums.map((num) => num * num);

console.log(nums, numsSquared);

console.log(fruits, fruits2);

for (let i = 0; i < fruits.length; i++) {
  fruits[i] = "deleted";
}

console.log(fruits);
process.exit(0);

x = 0;
for (let i = 0; i < 5; i++) {
  let y = x + i;

  console.log(`${x} + ${i} = ${y}`);

  x = y;
}
