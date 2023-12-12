const shareicon  = document.getElementById("fa")
const opener  = document.getElementById("opener")
shareicon.addEventListener("click", changeColor);
function changeColor() {
    shareicon.classList.toggle("changecolor")
    opener.classList.toggle("changecolor")
}
