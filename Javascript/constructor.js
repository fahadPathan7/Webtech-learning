
function Student(name, roll, age, sub) {
    this.name = name;
    this.roll = roll;
    this.age = age;
    this.sub = sub;

    this.display = function() {
        console.log(this.name);
        console.log(this.roll);
        console.log(this.age);
        console.log(this.sub);
    }
}

var student1 = new Student("Fahad", 65, 24, "swe");
student1.display();