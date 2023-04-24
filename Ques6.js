//6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let array = ["Himanshu", "Banana", "Mango", "Grapes", "Date"];
function capitalizeArray(array) {
  let capitalizedarray = [];
  for (i = 0; i < array.length; i++) {
    capitalizedarray.push(array[i].toUpperCase());
  }
  return capitalizedarray;
}
let new_array = capitalizeArray(array);
console.log(new_array);
