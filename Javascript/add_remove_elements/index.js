

// creating new elements
var newHeading = document.createElement('h1');
var text = document.createTextNode('New Heading');
newHeading.appendChild(text); // i created a heading and added text to it. but it is not visible yet.

var container = document.getElementById('container');
container.appendChild(newHeading);  // append new element to the container. now it is visible.



// removing elements
var heading = document.getElementsByTagName('h1')[0];
container.removeChild(heading); // remove the heading from the container. now it is not visible.
