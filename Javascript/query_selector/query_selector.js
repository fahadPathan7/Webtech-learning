// we don't need different methods for different selectors. we can use querySelector() method for all selectors.
// querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

// by id
document.querySelector("#id").innerHTML = "Hello World!";

// by class
document.querySelector(".class").innerHTML = "Hello World!";

// by tag
document.querySelector("h1").innerHTML = "Hello World!";