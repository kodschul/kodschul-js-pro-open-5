// objects

let person = {
  name: "Max",
  age: 18,
  hobbies: "playing",
};

for (const key in person) {
  console.log(key, person[key]);
}

process.exit(0);

// arrays

const fruits = ["Apfel", "Banane", "Orange"];

fruits.forEach((fruit) => {
  fruit = "deleted";
  console.log(fruit);
});

let fruits2 = fruits.map((fruit) => fruit.toUpperCase()[0]);

let nums = [1, 2, 3, 4, 5];

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
