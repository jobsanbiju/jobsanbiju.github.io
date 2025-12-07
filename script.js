const header = document.getElementById("header");
const headerTitle = document.getElementById("headerTitle");
const logo = document.getElementById("logo");
const contactBtn = document.querySelector(".contact-btn");
const contactSection = document.getElementById("contact");

// HEADER SCROLL ANIMATION
window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// CONTACT BUTTON → SCROLL TO CONTACT
contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// CLICK LOGO / TITLE → SCROLL TO TOP
logo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
headerTitle.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
