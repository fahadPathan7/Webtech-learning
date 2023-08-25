// function literals are used to create objects.
// They are used to create objects with properties and methods.
function studentInfo(name, age, grade) {
    return {
        name,
        age,
        grade
    }
}

console.log(studentInfo("John", 20, 3.5));


// consise methods
// we can remove the function keyword and the colon
// we can also remove the function name
// we can also remove the return keyword
let student = {
    body() {
        console.log("I am a student");
    }
}
console.log(student.body());