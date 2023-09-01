// cookie is a string that is stored in the browser and is sent with every request to the same domain
// cookie is a key-value pair
// it is used to store small amount of data
// it is used to store user preferences
// it is used to track user activity
// it is used to store user session
// it is used to store user authentication
// it is used to store user shopping cart items
// it has a size limit of 4KB
// it has a expiry date


document.cookie = 'name=foo; expires=Fri, 1 Sep 2023 06:15:59 GMT';
document.cookie = 'name2=bar';

console.log(document.cookie); // name=foo; name2=bar