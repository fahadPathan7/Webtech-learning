
// // it will run after 3 second.
// setTimeout(() => {
//     console.log('Hello');
// }, 3000);


// setTimeout(display, 2000); // it will call the display function after 2 second.

// function display() {
//     console.log('Hi');
// }


const saveBtn = document.querySelector('.save-button');
const message = document.querySelector('.show-message');

saveBtn.addEventListener('click', saveUser);

function saveUser() {
    message.textContent = 'User Saved';

    // to auto disappear the message after 2 second.
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
}