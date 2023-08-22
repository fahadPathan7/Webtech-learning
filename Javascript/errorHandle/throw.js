
// with throw we can create own errors

try {
    throw new Error('Whoops!');
} catch (e) {
    console.log(e.name + ': ' + e.message); // Error: Whoops!
}  