
console.clear();

// GET request
axios({ method: "get", url: "https://jsonplaceholder.typicode.com/posts/1" })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));


// POST request
axios({ method: "post", url: "https://jsonplaceholder.typicode.com/posts", data: {
    title: "New Post",
    body: "This is a new post" } })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));


// PUT request
axios({ method: "put", url: "https://jsonplaceholder.typicode.com/posts/1", data: {
    id: 11,
    title: "Updated Post",
    body: "This is an updated post",
    userId: 1 } })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));


// PATCH request
axios({ method: "patch", url: "https://jsonplaceholder.typicode.com/posts/1", data: { title: "Updated Post patch" } })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));


// DELETE request
axios({ method: "delete", url: "https://jsonplaceholder.typicode.com/posts/1" })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));



// async await approach
const makeRequest = async (config) => {
    const res = await axios(config);
    return res;
}

const getData = async () => {
    makeRequest({ method: "get", url: "https://jsonplaceholder.typicode.com/posts/1" })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
}

const postData = async () => {
    makeRequest({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: ({
        title: "New Post async",
        body: "This is a new post async" }), })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
}

const putData = async () => {
    makeRequest({
        method: "put",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        data: ({
        id: 1,
        title: "Updated Post async",
        body: "This is an updated post async",
        userId: 1 }), })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
}

const patchData = async () => {
    makeRequest({
        method: "patch",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        data: ({ title: "Updated Post patch async" }), })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
}

const deleteData = async () => {
    makeRequest({ method: "delete", url: "https://jsonplaceholder.typicode.com/posts/1" })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
}

postData();
putData();
patchData();