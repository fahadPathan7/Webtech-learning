// we can store data on the client side using local storage. (browser)
// local storage is a key value pair storage.
// local storage is a synchronous api.
// local storage is a string only storage.
// local storage is a persistent storage. (data will be there even after the browser is closed)

console.clear();

// setItem(key, value)
localStorage.setItem('name', 'Fahad');
localStorage.setItem('age', 23);
localStorage.setItem('job', 'Developer');
const visitedCountries = ['Bangladesh', 'India', 'Pakistan', 'Nepal', 'Bhutan', 'China'];
localStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));


// getItem(key)
let name = localStorage.getItem('name');
console.log(name);
let age = localStorage.getItem('age');
console.log(age);
let job = localStorage.getItem('job');
console.log(job);
const vCountries = JSON.parse(localStorage.getItem('visitedCountries'));
console.log(vCountries);


// removeItem(key)
localStorage.removeItem('job');