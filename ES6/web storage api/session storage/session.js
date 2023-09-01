// session storage is a key value pair storage.
// session storage is a synchronous api.
// session storage is a string only storage.
// session storage is a non-persistent storage. (data will be there only till the browser is open)
// use is same as local storage.


// setItem(key, value)
sessionStorage.setItem('name', 'Fahad');
sessionStorage.setItem('age', 23);
sessionStorage.setItem('job', 'Developer');
const visitedCountries = ['Bangladesh', 'India', 'Pakistan', 'Nepal', 'Bhutan', 'China'];
sessionStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));


// getItem(key)
let name = sessionStorage.getItem('name');
console.log(name);
let age = sessionStorage.getItem('age');
console.log(age);
let job = sessionStorage.getItem('job');
console.log(job);
const vCountries = JSON.parse(sessionStorage.getItem('visitedCountries'));
console.log(vCountries);


// removeItem(key)
sessionStorage.removeItem('job');

// clear()
//sessionStorage.clear(); // clear all the data from session storage