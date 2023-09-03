

const data = require('./creating.json');

// access the data
console.log(data.students[0].name); // John
console.log(data.students[0].age); // 30
console.log(data.students[0].languages[0]); // English
console.log(data.students[0].friends[0].name); // Peter
