var names = ["fahad", "pathan", "rayhan"]; // creating an array

names.unshift("front"); // adding new element in the beginning
console.log(names); // [ 'front', 'fahad', 'pathan', 'rayhan' ]

names.shift(); // removing the first element
console.log(names); // [ 'fahad', 'pathan', 'rayhan' ]

names.splice(2, 0, "hello"); // adding in the position 2. and deleting 0 elements from that index.
console.log(names); // [ 'fahad', 'pathan', 'hello', 'rayhan' ]

names.splice(1, 2); // will delete elements from index 1 to 2.
console.log(names); // [ 'fahad', 'rayhan' ]