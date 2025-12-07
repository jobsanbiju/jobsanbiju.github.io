function goHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
headerTitle.addEventListener("click", goHome);
logo.addEventListener("click", goHome);

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("scroll", () => {
    const logo = document.getElementById("logo");
    const title = document.getElementById("headerTitle");

    // Disable animation entirely on mobile
    if (window.innerWidth < 768) return;

    if (window.scrollY > 80) {
        title.style.opacity = "0";
        logo.style.opacity = "1";
        logo.style.transform = "scale(1) translateY(0)";
    } else {
        title.style.opacity = "1";
        logo.style.opacity = "0";
        logo.style.transform = "scale(0.6) translateY(20px)";
    }
});

