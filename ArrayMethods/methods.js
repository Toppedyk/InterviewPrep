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

// Remove first array element
fruits.shift();
console.log(fruits);

// Add element to front of array
fruits.unshift("Banana");
console.log(fruits);

// Merge two arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// splice an array,   second parameter can be used to remove a fixed number of elements
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// sort alphabetically
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

// sort uses strings, so we must use compare function with numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

// Mapping an array using a different function
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(doubleFunction);

function doubleFunction(value) {
  return value * 2;
}
console.log(numbers2);
