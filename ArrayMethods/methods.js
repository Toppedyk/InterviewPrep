// Length of array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

// Convert array to string
let sentence = fruits.toString();
console.log(sentence);

// Join array elements to string and define seperator
let joined = fruits.join("*");
console.log(joined);

// Pop(remove) and Push(add)
fruits.push("Grape");
console.log(fruits);
fruits.pop();
console.log(fruits);
