
// fetch api
// this is a promise based api
// async await can be used with this api. this means we can use async await with promises.




console.clear();

// get resource
const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error("ERROR: ${response.status}");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


// post resource. create
const postData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My post',
            body: 'This is my post',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("ERROR: ${response.status}");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


// put resource. (update)
// link should be specific
const putData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1, // update will be done on this id
            title: 'Updated My post',
            body: 'Updated This is my post',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("ERROR: ${response.status}");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


// patch. update only specific field
// put resource. (update)
// link should be specific
const patchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'patched My post'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("ERROR: ${response.status}");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


// delete resource
const deleteData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("ERROR: ${response.status}");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

getData();
postData();
putData();
patchData();
deleteData();


// async await
