
// array destructuring
let numbers = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = numbers;
console.log(a, b, c, d, e); // 1 2 3 4 5

// array destructuring with rest
let [f, g, ...h] = numbers;
console.log(f, g, h); // 1 2 [ 3, 4, 5 ]


// swapping values with array destructuring
let x = 10, y = 20;
[x, y] = [y, x];
console.log(x, y); // 20 10