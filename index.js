const menuMobile = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".link");
const hamburger = document.querySelector(".hamburger");
let menuAtivo = false;

function abrirMenu() {
    if (menuAtivo) {
        fecharMenu();
        return;
    }
    menuMobile.classList.add("active");
    hamburger.classList.add("fa-xmark");
    menuLinks.forEach(el => {
        el.classList.add("animation-links");
    })
    menuAtivo = true;
}

function fecharMenu() {
    menuMobile.classList.remove("active");
    hamburger.classList.remove("fa-xmark");
    menuLinks.forEach(el => {
        el.classList.remove("animation-links");
    })
    menuAtivo = false;
}

menuLinks.forEach(element => {
    element.addEventListener('click', () => {
        fecharMenu();
    })
});