let greet = () => "Hello";

function doComplex(a, b, c = 1) {
  return a * b * c;
}

console.log(doComplex(1, 2, 2));

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

{
  let blockVariable = "Ich bin ein Block";
  console.log(blockVariable); // Ausgabe: Ich bin ein Block
}

console.log(blockVariable); // Fehler: blockVariable ist nicht definiert
