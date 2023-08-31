// guide: https://jsonplaceholder.typicode.com/guide/


console.clear();

const makeRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest(); // XMLHttpRequest is used to make the request to the server
    console.log(xhr);

    xhr.open(method, url); // open method is used to open the connection

    xhr.setRequestHeader('Content-Type', 'application/json'); // is used to set the header of the request. it is needed because we are sending the data in json format.

    // work of onload is to get the response from the server
    xhr.onload = () => {
        console.log(xhr.status); // status code like 200, 404, 500. 200 means success
        console.log(JSON.parse(xhr.response));
    }

    // work of onerror is to handle the error
    xhr.onerror = () => {
        console.log('Error');
    }

    xhr.send(JSON.stringify(data)); // send method is used to send the request to the server
    // JSON.stringify is used to convert the data into json format.
}

// to get the data from the server
const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
}

// send the data to the server
const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    });
}

// update the data to the server
// it will update the whole data. It will not update the specific data.
const updateData = () => {
    // given link should be specific
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1, // id is required to update the data
        title: 'footer',
        body: 'barrier',
        userId: 1,
    });
}

// to change the specific data
const updateSpecificData = () => {
    // given link should be specific
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'changed title',
        body: 'changed body',
    });
}

// to delete the data
const deleteData = () => {
    // given link should be specific
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
}

deleteData();