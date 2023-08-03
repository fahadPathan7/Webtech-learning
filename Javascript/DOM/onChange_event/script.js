
const varName = document.querySelector('#name');
console.log(varName);

varName.addEventListener('change', changeHandler);

function changeHandler(e) {
    console.log(e.target.value);
}

