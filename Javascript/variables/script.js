
// 3 types of variables. var, let, const
// var is global scope. let and const are block scope.
// var and let can be changed. const can't be changed.
// var and let can be declared without a value. const can't be declared without a value.
// var is for older browsers. let and const are for newer browsers.
// var can be redeclared. let and const can't be redeclared.
// var is hoisted. let and const are not hoisted.
// var is initialized as undefined. let and const are not initialized.



// var.
var name = 'John Doe';
console.log(name); // John Doe
name = 'Steve Smith'; // changeable
console.log(name); // Steve Smith


// const
const name = 'John Doe';
console.log(name); // John Doe
name = 'Steve Smith'; // not changeable
console.log(name); // error


// let
let name = 'John Doe';
console.log(name); // John Doe
name = 'Steve Smith'; // changeable
