

function addNumbers(a, b, c) {
    console.log(a + b + c);
}

let numbers = [1, 2, 3];
addNumbers(...numbers); // I can pass array as argument using spread operator. it will spread array elements as arguments.


let numbers1 = [...numbers, 4, 5, 6]; // I can also use spread operator to create new array from existing array.
console.log(numbers1); // output: [ 1, 2, 3, 4, 5, 6 ]


// i can add spread operator in between array elements. it will spread array elements as arguments.

let numbers2 = [1, ...numbers, 4, 5, 6];
console.log(numbers2); // output: [ 1, 1, 2, 3, 4, 5, 6, 4, 5, 6 ]  // 1 is repeated because i have added it in the beginning of array.