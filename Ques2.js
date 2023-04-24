//2. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all
//   odds. Print sum of evens and sum of odds as array
let Even = 0;
let Odd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    Even += i;
  } else {
    Odd += i;
  }
}
sums_Even_array=[Even]
sums_Odd_array=[Odd]
console.log("Sum of all Even Number is :", sums_Even_array);
console.log("Sum of all Odd Number is :", sums_Odd_array);
