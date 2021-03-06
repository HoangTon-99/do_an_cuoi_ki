const body = document.querySelector("body");
const navbar = document.querySelector(".navbar__header");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cannelBtn = document.querySelector(".cannel-btn");
const menuHr = document.querySelector(".menu__hr");

menuBtn.onclick = () => {
    menu.classList.add("active")
    menuBtn.classList.add("hide")
    body.classList.add("disabledScroll")
}
cannelBtn.onclick = () => {
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
    body.classList.remove("disabledScroll")

}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
    this.scrollY > 20 ? menuHr.classList.add("hide") : menuHr.classList.remove("hide")
}