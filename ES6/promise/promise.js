
let promise = new Promise((resolve, reject) => {
    console.log('Promise');
    let task = false;

    if (task) {
        resolve('Task completed');
    } else {
        reject('Task not completed');
    }
});


// it will be executed after the promise constructor.
// .then() is used to handle the success case.
// .catch() is used to handle the failure case.
// .finally() is used to handle the cleanup case.
promise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('I will always be executed');
});