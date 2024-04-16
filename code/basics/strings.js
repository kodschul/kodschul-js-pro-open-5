// regex

let text = "Hello World, here is JS!";

let regex = /([A-Z])\w+/g;

let newRegex = new RegExp(`([A-Z])\\w+`, "g");

console.log(newRegex);

console.log(text.replace(newRegex, "REGEX"));

console.log(newRegex.test(text));

process.exit(0);

// strings

let x = "   Hello World Hello World  ";

console.log(x.charAt(x.length - 1));

console.log(x.substring(0, 5));

console.log(x.indexOf("-ello"), x.includes("-ello"));

console.log(x.replaceAll("Hello", "Hi"));

console.log({ x: `->${x.trimStart()}` });
