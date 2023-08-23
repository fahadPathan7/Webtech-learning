
// I can use x before declaring it. This is because of hoisting
// in const and let, hoisting is not possible. only var can be hoisted.
x = 10;
console.log(x);
var x; // hoisting




// I can't use y before declaring it. This is because of strict mode
// in strict mode, hoisting is not possible.
"use strict";
y = 15;
console.log(y); // error