const message = 'Hello World';

// startsWith()
console.log(message.startsWith('Hello')); // true

// startsWith() with position
// begin searching at position 5
console.log(message.startsWith('Hello', 5)); // false




// endsWith()
console.log(message.endsWith('!')); // false




// includes()
console.log(message.includes('o')); // true

// includes() with position
// begin searching at position 8
console.log(message.includes('o', 8)); // false