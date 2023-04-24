/* Write a function called sumOfArrayItems, it takes an array parameter and return thesum of all the items.
 Check if all the array items are number types. If not give return reasonable feedback */
let array = [25, 35,  40, 65, 80];

function sumOfArrayItems(arr) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] != "number") {
      return "All Elements of the array not a Number";
    } else {
      sum += array[i];
    }
  }
  return sum;
}
console.log(sumOfArrayItems(array));
