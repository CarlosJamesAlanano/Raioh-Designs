const burgir = document.querySelector(".toggle_menu");
const hNav = document.querySelector(".header_nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    hNav.classList.toggle("open");
})

const contactButton = document.querySelector(".contact_button");
const contactForm = document.querySelector(".contact_forms");
const backDrop = document.querySelector(".backdrop");

contactButton.addEventListener("click", () => {
    if(contactForm.classList.contains("open")){
        contactForm.classList.remove("open");
        contactButton.classList.remove("open");
        backDrop.classList.remove("open");
    } else{
        contactForm.classList.add("open");
        contactButton.classList.add("open");
        backDrop.classList.add("open");
    }
})

const home = document.querySelector(".btnHome");
const abt = document.querySelector(".btnAbout");
const evnts = document.querySelector(".btnEvents");
const prgrms = document.querySelector(".btnPrograms");
const news = document.querySelector(".btnNews");

home.addEventListener("click", () => {
    burgir.classList.remove("open");
    hNav.classList.remove("open");
});
abt.addEventListener("click", () => {
    burgir.classList.remove("open");
    hNav.classList.remove("open");
});
evnts.addEventListener("click", () => {
    burgir.classList.remove("open");
    hNav.classList.remove("open");
});
prgrms.addEventListener("click", () => {
    burgir.classList.remove("open");
    hNav.classList.remove("open");
});
news.addEventListener("click", () => {
    burgir.classList.remove("open");
    hNav.classList.remove("open");
});
