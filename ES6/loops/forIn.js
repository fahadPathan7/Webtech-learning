// for in is used to iterate over the properties of an object
let students = {
    name: 'John Doe',
    age: 16,
    reg: 12
};

for (const key in students) {
    console.log(key + ' = ' + students[key]);
}

/*
output:

name = John Doe
age = 16
scores = [object Object]
*/