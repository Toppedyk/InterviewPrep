let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
for (let i = 0; i < my_array.length - 1; i++) {
  for (let j = 0; j < my_array.length - i - 1; j++) {
    if (my_array[j] > my_array[j + 1]) {
      var temp = my_array[j];
      my_array[j] = my_array[j + 1];
      my_array[j + 1] = temp;
    }
  }
}
console.log(my_array);
