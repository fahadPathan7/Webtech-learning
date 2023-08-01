
// Event listener with anonymous function
document.querySelector('#action').addEventListener('click', function() {
    alert('You clicked me!');
});


// Event listener with named function
function myFunction() {
    alert('You clicked me!');
}
document.querySelector('#action').addEventListener('click', myFunction);