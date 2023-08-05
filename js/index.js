const buttonActive = document.getElementById("buttonActive")
const buttonLabel = document.getElementById("buttonLabel")
function changeLabel() {
    buttonLabel.classList.toggle("hidden");
    buttonActive.classList.toggle("hidden")
}