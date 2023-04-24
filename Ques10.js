/*10. JavaScript variable name does not support special characters or symbols except $
or _. Write a function isValidVariable which check if a variable is valid or invalid variable. */
let validVariable = 'my-Var';

function isValidVariable(validVariable) {
    if(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(validVariable)) {
      return "It is Valid Variable"
    } else {
      return "It is not Valid Variable"
    }
  }
console.log(isValidVariable(validVariable))