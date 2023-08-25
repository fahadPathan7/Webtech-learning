
// ES6 Arrow Function
// i can not call it before declaring it.
// i can not use it as a constructor.

// const add = (x, y) => {
//     let sum = x + y;
//     console.log(sum);
// }

// add(2, 3); // 5




// another demo with object

const student = [
    { name: 'Jony', age: 20 },
    { name: 'Mony', age: 21 },
    { name: 'Pony', age: 22 },
    { name: 'Bony', age: 23 },
];

const studentName = () => {
    // return student.filter((x) => {
    //     return x.age > 20;
    // }).map((y) => {
    //     return y.name;
    // });

    // can be written as
    return student.filter(x => x.age > 20).map(y => y.name);
}

console.log(studentName());