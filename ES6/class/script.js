
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.school = "ABC";
    }

    get getAge() {
        return this.age;
    }

    get getName() {
        return this.name;
    }

    set setSchool(school) {
        this.school = school;
    }
}

let student1 = new student("John", 20);
console.log(student1.getName);
console.log(student1.getAge);
console.log(student1.school);
student1.setSchool = "XYZ";
console.log(student1.school);
