let greet = () => "Hello";

String.prototype.capitalize = function () {
  console.log(this);
};

"abc".capitalize();

const createCalc = (param1) => {
  if (param1 == "add") {
    return (a, b) => a + b;
  } else if (param1 == "sub") {
    return (a, b) => a - b;
  }
};

console.log(createCalc("add")(1, 2));
console.log(createCalc("sub")(1, 2));

function sumAll(...abc) {
  return abc.reduce((total, num) => num + total, 0);
}

const numbers = [1, 2];

console.log(sumAll(...numbers)); // 3
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(1, 2, 3, 4)); // 10

function doComplex({ a = 1, b = 1, c = 1 }) {
  return a * b * c;
}

console.log(doComplex({ a: 1 }));

let x = 0;
let y = 1;

function doTest() {
  x *= 2;
  y *= 2;
}
doTest();
console.log(x, y);

function doTestX(greet) {
  greet();
}

doTestX(() => console.log("Hi"));

// --- recursion

function fact(n) {
  if (n === 0) return 1;

  return n * fact(n - 1);
}

console.log(fact(4));

// -- scopes

var abc = 5;

const abcFunc = () => {
  var abc = 10;
  console.log(abc);
};
abcFunc();
console.log(abc);

{
  let blockVariable = "Ich bin ein Block";
  console.log(blockVariable); // Ausgabe: Ich bin ein Block
}

console.log(blockVariable); // Fehler: blockVariable ist nicht definiert
