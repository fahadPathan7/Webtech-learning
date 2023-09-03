// jsonpathfinder.com - to find the path of complex JSON data


// path to the JSON file
const data = require('./creating.json');


// access the data
console.log(data.students[0].name); // John
console.log(data.students[0].age); // 30
console.log(data.students[0].languages[0]); // English
console.log(data.students[0].friends[0].name); // Peter


// modify the data
data.students[0].name = 'Jane'; // change name from John to Jane
console.log(data.students[0].name); // Jane


// delete the data
delete data.students[0].name; // delete name
console.log(data.students[0].name); // undefined


// add the data
data.students[0].cgpa = 3.75; // add cgpa
console.log(data.students[0].cgpa); // 3.75