
// adding css from js
function changeStyle() {
    var element = document.getElementById("text-style");
    element.classList.add("text-style");
}

// removing css from js
function resetStyle() {
    var element = document.getElementById("text-style");
    element.classList.remove("text-style");
}