// here we are passing a function as a parameter to another function.
// This is called a higher order function.
// The function that is passed as a parameter is called a callback function.

const printText = (text) => {
    console.log(text);
}

const higherOrderFunction = (text, callback) => {
    callback(text);
}

higherOrderFunction("Hello World!", printText);