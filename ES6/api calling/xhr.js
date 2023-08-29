console.clear();

const makeRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest(); // XMLHttpRequest is used to make the request to the server
    console.log(xhr);

    xhr.open(method, url); // open method is used to open the connection

    xhr.setRequestHeader('Content-Type', 'application/json'); // is used to set the header of the request

    // work of onload is to get the response from the server
    xhr.onload = () => {
        console.log(JSON.parse(xhr.response));
    }

    // work of onerror is to handle the error
    xhr.onerror = () => {
        console.log('Error');
    }

    xhr.send(JSON.stringify(data)); // send method is used to send the request to the server
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


sendData();