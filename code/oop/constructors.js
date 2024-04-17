function Person(name, age) {
  // API Anbindung etc

  // rechnen

  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log("Hi ", this.name);
  };
}

function createPerson(name, age) {
  return { name, age };
}

const franz = new Person("Franz", 15);
const alice = new Person("Alice", 18);

const bob = createPerson("Bob", 12);

console.log({ franz, bob });
