// AOS
AOS.init();

// Remove loader on page load
let loader = document.getElementsByClassName("loader-container")[0];
window.onload = () => {
    loader.classList.add("loaded");
};
loader.addEventListener("animationend", () => {
    loader.style.display = "none";
});

// Navigation bar menu button
const menuBtn = document.getElementsByClassName("navbar__menu-btn")[0];
const navbarLinks = document.getElementsByClassName("nav__links")[0];

menuBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    if (navbarLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times-circle fa-fw"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars fa-fw"></i>';
    }
});

// Dark Mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const imgReplace = document.getElementById("thumbnail-replace-dark");

function enableDarkMode() {
    // Add class "darkmode" to <body>
    document.body.classList.add("darkmode");
    // Update darkMode in localStorage
    localStorage.setItem("darkMode", "enabled");
    // Change GitHub Pages thumbnail
    imgReplace.src = "/images/ghpages-dark.png";
    // Change moon icon to sun icon
    darkModeToggle.innerHTML =
        '<i class="fas fa-sun fa-fw"></i><p> Light Mode</p>';
}

function disableDarkMode() {
    // Remove class "darkmode" from <body>
    document.body.classList.remove("darkmode");
    // Update darkMode in localStorage
    localStorage.setItem("darkMode", null);
    // Change GitHub Pages thumbnail
    imgReplace.src = "/images/ghpages.png";
    // Change sun icon to moon icon
    darkModeToggle.innerHTML =
        '<i class="fas fa-moon fa-fw"></i><p> Dark Mode</p>';
}

if (darkMode === "enabled") {
    enableDarkMode();
}

// Automatically detect theme
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    darkMode === null
) {
    enableDarkMode();
}

function darkModeSwitcher() {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Dark mode toggle button event listeners
darkModeToggle.addEventListener("click", darkModeSwitcher);
darkModeToggle.addEventListener("keypress", darkModeSwitcher);
