document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".navigation_mobile");
    const educationSection = document.querySelector("#mobile_avatar");

    window.addEventListener("scroll", () => {
        const educationBottom = educationSection.getBoundingClientRect().bottom;

        // Show the navigation bar after scrolling past the Education section
        if (educationBottom < 0) {
            navigation.classList.add("visible");
        } else {
            navigation.classList.remove("visible");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    // Toggle the menu visibility
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});