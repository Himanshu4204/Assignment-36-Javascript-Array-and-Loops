//5. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ["banana", "orange", "mango", "lemon"];
let reverse_fruits = [];
for (let i = 3; i >= 0; i--) {
  reverse_fruits.push(fruits[i]);
}
console.log(reverse_fruits);
