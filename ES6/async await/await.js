// I can do the same things as nested promise chaining using async await
// await keyword is used to wait for a promise to resolve.
// async keyword is used to make a function asynchronous.


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

const callAllTasks = async () => {
    try {
        const t1 = await task1(); // wait for task1 to finish
        console.log(t1);
        const t2 = await task2(); // wait for task2 to finish
        console.log(t2);
        const t3 = await task3(); // wait for task3 to finish
        console.log(t3);
    } catch (err) {
        console.log(err);
    }
}

callAllTasks();