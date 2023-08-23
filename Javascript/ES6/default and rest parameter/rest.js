

// in rest parameter we can pass any number of arguments. it will be stored in array. we can access it using array index.
function addNumbers(x, y, ...numbers) {
    console.log(x);
    console.log(y);
    console.log(numbers[3]);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// output:
// 1
// 2
// 6