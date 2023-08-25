var numbers = [1, 2, 3];
var squareNumbers = numbers.map(function (val) {
    return val * val;
});

console.log(squareNumbers); // [1, 4, 9]



// a map with square root values
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);