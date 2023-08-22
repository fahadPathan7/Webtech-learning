

// try will try to run the code inside it.
// If there is an error, it will go to catch.
// If there is no error, it will skip catch and go to finally.
// catch will run if there is an error in try.
// finally will run no matter what.



// with no error in try block
// it will print try, finally
try {
    console.log('try');
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally\n');
}


// with error in try block
// it will print try, catch, finally
try {
    console.log('try');
    console.log(try2); // this will cause an error

    console.log('try2'); // this will not run
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}