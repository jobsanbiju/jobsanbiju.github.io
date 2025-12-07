const header = document.getElementById("header");
const headerTitle = document.getElementById("headerTitle");
const logo = document.getElementById("logo");
const contactBtn = document.querySelector(".contact-btn");
const contactSection = document.getElementById("contact");

window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

logo.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
);

headerTitle.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
);
