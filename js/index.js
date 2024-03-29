// Get contact form items
const buttonActive = document.getElementById("buttonActive");
const buttonLabel = document.getElementById("buttonLabel");

// Function to change the label on form submit
function changeLabel() {
    buttonLabel.classList.toggle("hidden");
    buttonActive.classList.toggle("hidden");
}

// --------------------------------------------------------

// Get the screen height of the device
const screenHeight = window.screen.height;

// Get the ERB Logo
const erbLogo = document.getElementById("erbLogo");

// Function to change the navbar color en sroll
document.addEventListener('scroll', () => {
    const navBar = document.getElementById("navBar");

    if (window.scrollY >= screenHeight * 0.80) {
        navBar.classList.remove("bg-transparent", "md:text-white");
        navBar.classList.add("bg-white", "md:text-gray-900");
        erbLogo.src = "src/imgs/erb-logo.webp";
    } else {
        navBar.classList.remove("bg-white", "md:text-gray-900");
        navBar.classList.add("bg-transparent", "md:text-white");
        erbLogo.src = "src/imgs/erb-logo white.webp";
    }
});