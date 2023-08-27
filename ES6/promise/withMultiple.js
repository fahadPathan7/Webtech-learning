let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1');
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2');
    }, 1000);
});

// Promise.all() is used to execute multiple promises at the same time.
// It will return a promise which will be resolved when all the promises are resolved.
// If any of the promise is rejected, then the promise returned by Promise.all() will be rejected.
Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


// Promise.race() is used to execute multiple promises at the same time.
// It will return a promise which will be resolved when any of the promises is resolved.
Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});