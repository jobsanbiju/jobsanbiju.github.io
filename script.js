const header = document.getElementById("header");
const headerTitle = document.getElementById("headerTitle");
const logo = document.getElementById("logo");
const contactBtn = document.querySelector(".contact-btn");
const contactSection = document.getElementById("contact");

// HEADER SCROLL ANIMATION — ENABLED FOR ALL DEVICES
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 70) {
        header.classList.add("scrolled");
        headerTitle.classList.add("hide-title");
        logo.classList.add("show-logo");
    } else {
        header.classList.remove("scrolled");
        headerTitle.classList.remove("hide-title");
        logo.classList.remove("show-logo");
    }
});

// CONTACT BUTTON → SCROLL TO CONTACT
contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// CLICK LOGO / TITLE → SCROLL TO TOP
logo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
headerTitle.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
