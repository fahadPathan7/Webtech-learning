/*
filter function is used to filter the array elements based on the condition. It returns the new array with the filtered elements. The filter function takes the callback function as an argument and executes it for every element in the array. If the callback function returns true, it includes the element in the new array. If the callback function returns false, it does not include the element in the new array. The filter function does not change the original array.
*/

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6, 8]