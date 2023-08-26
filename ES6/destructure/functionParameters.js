
// object destructuring using function parameters
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
// function displaySummary(student) {
//     console.log('Hello, ' + student.name);
//     console.log('Your English score is ' + student.scores.english);
//     console.log('Your Math score is ' + student.scores.math);
// }

// after destructuring
function displaySummary({ name, scores: { english, math } }) {
    console.log('Hello, ' + name);
    console.log('Your English score is ' + english);
    console.log('Your Math score is ' + math);
}

displaySummary(student);