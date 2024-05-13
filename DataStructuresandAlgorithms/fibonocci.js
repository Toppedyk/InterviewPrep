// Simple For Loop
// var prev = 0;
// var next = 1;
// console.log(prev);
// console.log(next);
// for (let index = 0; index < 18; index++) {
//   var newFibo = prev + next;
//   console.log(newFibo);
//   prev = next;
//   next = newFibo;
// }

// using Recursion
console.log(0);
console.log(1);
var count = 2;
function fibonocci(num, num2) {
  if (count <= 19) {
    newFibo = num + num2;
    console.log(newFibo);
    num = num2;
    num2 = newFibo;
    count += 1;
    fibonocci(num, num2);
  } else {
    return;
  }
}
fibonocci(0, 1);

// Finding The nth Fibonacci Number Using Recursion
