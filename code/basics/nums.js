let x = 3.45678;

let y = 300;

let input = "300asdasds400";

console.log(parseInt("1010", 2));
console.log(isNaN(input));

// console.log(parseFloat(input));

let precision = y.toString().split(".")[0].length + 2;

console.log(y.toPrecision(precision));

// console.log(parseFloat(x.toFixed(3)));
