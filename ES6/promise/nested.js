// here I will use promise to chain tasks. if one of the task fails, the whole chain fails.


const task1 = () => {
    return new Promise((resolve, reject) => {
        resolve('task1 is resolved');
    });
}

const task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('task2 is resolved');
        }, 2000);
    });
}

const task3 = () => {
    return new Promise((resolve, reject) => {
        resolve('task3 is resolved');
    });
}

// this way of chaining is called nested chaining
// if one of the task fails, the whole chain fails
task1().then((res) => console.log(res))
    .then(task2)
    .then((res) => console.log(res))
    .then(task3)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));