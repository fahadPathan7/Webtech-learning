
const showlock = document.querySelector('.show-clock');
const clock = document.querySelector('.clock');

showlock.addEventListener('click', showClock);

function showClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.textContent = `${hours}:${minutes}:${seconds}`;

    setTimeout(showClock, 1000);
}