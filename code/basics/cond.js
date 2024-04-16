//

let myInput = process.argv[2];

let myRandom = Math.floor(Math.random() * 99) + 1;
let found = 0;

while (found < 1) {
  if (myInput === myRandom) {
    found = 1;
    break;
  } else if (myInput > myRandom) {
    myInput = myInput - 2;
  } else if (myInput < myRandom) {
    myInput = myInput + 3;
  }
  console.log(`${myRandom}  Schätzwert: ${myInput}`);
}

console.log(`${myRandom}`);

process.exit(0);

let fruits = {
  apple: "Abc",
  lemonade: "Cdef",
};

let fruit = "apple";
let x = fruits[fruit];

function abc() {
  console.log("abc was fired!");
}

let shouldCallFunc = true;

if (shouldCallFunc) {
  abc();
}

shouldCallFunc && abc();

let notExistFunc;

// notExistFunc = abc;

notExistFunc && notExistFunc();
notExistFunc?.notExistFunc?.notExistFunc?.();

// -- random number

let randomNumber = Math.floor(Math.random() * 99) + 1;
console.log(randomNumber);

let z = [1, 2, 3];
