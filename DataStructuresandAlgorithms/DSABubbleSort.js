let my_array = [7, 3, 9, 12, 11];
for (let i = 0; i < my_array.length - 1; i++) {
  var swapped = false;
  for (let j = 0; j < my_array.length - i - 1; j++) {
    if (my_array[j] > my_array[j + 1]) {
      var temp = my_array[j];
      my_array[j] = my_array[j + 1];
      my_array[j + 1] = temp;
      swapped = true;
    }
    if (!swapped) {
      break;
    }
  }
}
console.log(my_array);
