console.clear();


const makeRequest = async (url, method, data) => {
    const result = await $.get({
        url : url,
        method : method,
        data : data
    });
    return result;
}

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
    .then((result) => console.log(result))
    .catch((err) => console.log(err.status));
}

const postData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err.status));
}

const putData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {
        id: 1,
        title: 'fooooooo',
        body: 'barrrrrr',
        userId: 1
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err.status));
}

const patchData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PATCH', {
        title: 'Wooooooof',
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err.status));
}

const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
    .then((result) => console.log(result))
    .catch((err) => console.log(err.status));
}

getData();
postData();
putData();
patchData();
deleteData();
