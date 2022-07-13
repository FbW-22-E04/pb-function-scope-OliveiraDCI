// 1

const checkIfIsNumber = function (x, y) {
  if (typeof x === "number" && typeof y === "number") {
    console.log(`Check successful: arguments are number values.`);
  } else {
    console.log(`Number arguments only, please!`);
  }
  let calcExp = Math.pow(x, y);
  return `'x' to the power of 'y' = ${calcExp}`;
};
console.log("1:", checkIfIsNumber(3, 5));

// 2

let fruit = "banana";
const printFavoriteFruit = () => (fruit = "apple");

console.log("2:", printFavoriteFruit());

// 3

const calcExponent = function (a, b) {
  let result = Math.pow(a, b);
  return `3: ${a} to the power of ${b} = ${result}`;
};
console.log(calcExponent(3, 3));

// console.log(result);
// The 'result' variable cannot be accessed outside of the 'calcExponent' function, because of Javascript Scope. Let or const variables declared inside a Function, are restricted to that function scope and cannot be accessed outside, on the global scope.
