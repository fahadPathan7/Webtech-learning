


const saveBtn = document.querySelector('.save-button');
const message = document.querySelector('.show-message');


saveBtn.addEventListener('click', displayCount);

function displayCount() {
    let count = 0;


    // it will run every 1 second
    setInterval(() => {
        count++;
        message.textContent = 'you are here for: ' + count + ' seconds';
    }, 1000);
}