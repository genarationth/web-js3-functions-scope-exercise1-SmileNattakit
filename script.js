// Exercise 1.1
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const subtract = (a, b) => a - b;

console.log(sum(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(subtract(1, 2));

// Exercise 1.2

function information(firstname, location, hobby) {
  console.log(
    `My name is ${firstname}. I live in ${location}. My hobby is ${hobby}.`
  );
}

information("Nattakit", "Bangkok", "Coding");
console.log(information);
