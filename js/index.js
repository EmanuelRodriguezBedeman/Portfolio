// Const for the contact form
const buttonActive = document.getElementById("buttonActive")
const buttonLabel = document.getElementById("buttonLabel")

// Function to change the label on form submit
function changeLabel() {
    buttonLabel.classList.toggle("hidden");
    buttonActive.classList.toggle("hidden")
}

// --------------------------------------------------------

// Get the screen height of the device
const screenHeight = window.screen.height;

// Get the screen wdith of the device
const screenWidth = window.screen.width;

// Now, you can use the 'screenHeight' variable as needed
console.log("Screen height:", screenHeight);
console.log("Screen width:", screenWidth);

// Function to change the navbar color en sroll
document.addEventListener('scroll', () => {
    const navBar = document.getElementById("navBar");

    if (window.scrollY >= screenHeight * 0.80) {
        navBar.classList.remove("bg-transparent", "text-white");
        navBar.classList.add("bg-white", "text-black");
    } else {
        navBar.classList.remove("bg-white");
        navBar.classList.add("bg-transparent", "text-white");
    }
});