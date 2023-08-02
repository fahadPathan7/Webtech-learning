var names = new Array(5);
console.log(names.length); // print 5

names.push("r"); // pushing element at the end. wil increase size
console.log(names.length); // print 6

// inserting elements
for (var i = 0; i < 5; i++) names[i] = i;

// will print 0 1 2 3 4 5 r
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}