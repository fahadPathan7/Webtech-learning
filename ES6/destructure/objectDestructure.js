
const student = {
    name: 'John Doe',
    age: 16,
    id: 1234,
    scores: {
        english: 80,
        math: 90,
        science: 95
    }
}

// before destructuring
// let name = student.name;
// let age = student.age;
// let id = student.id;

// after destructuring
let { name, age, id, scores } = student;
console.log(name, age, id, scores);
console.log(scores.english);