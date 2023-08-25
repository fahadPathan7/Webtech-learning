
let names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
names.forEach(printName);

function printName(name) {
    console.log(name);
}


// another way to write the same code
names.forEach(function(name, index) {
    console.log(index + ": " + name);
});