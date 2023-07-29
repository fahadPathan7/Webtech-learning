// I can change the html from javascript. I can change the text, the color, the size, etc. I can also add new elements to the html page.
// DOM = Document Object Model
var heading1 = document.getElementById("heading1");
heading1.innerHTML = "Hello World!";

// another way to do it
var heading2 = document.getElementById("heading2").inertHTML = "Hello World!";