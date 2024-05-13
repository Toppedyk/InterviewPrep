let my_array = [7, 11, 23, 45, 3, 15];
var minVal = my_array[0];
my_array.forEach((element) => {
  if (element <= minVal) {
    minVal = element;
  }
});
console.log("Lowest value:", minVal);
