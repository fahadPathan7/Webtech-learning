
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// only returns the first element that satisfies the condition
let evenNumbers = numbers.find((number) => number % 2 === 0);
console.log(evenNumbers); // 2