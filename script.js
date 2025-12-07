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

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        headerTitle.classList.add("hidden");
        logo.classList.add("visible");
    } else {
        header.classList.remove("scrolled");
        headerTitle.classList.remove("hidden");
        logo.classList.remove("visible");
    }
});
