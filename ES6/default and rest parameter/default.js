
// in default parameter we can set default value of parameter if we don't pass any value in function call
function printName(name = 'no name') {
    console.log(name)
}

printName('fahad');
printName();

// output:
// fahad
// no name