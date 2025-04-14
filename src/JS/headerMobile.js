//Seleciona o menu
const mobileMenu = document.querySelector(".mobile-menu-icon");
const iconOpen = document.querySelector(".icon-header-open");
const iconClose = document.querySelector(".icon-header-close");

const desktopMenu = document.querySelector(".desktop-menu");

// Evento de clique para fechar e abrir menu mobile
mobileMenu.addEventListener("click", () => {
    if(desktopMenu.classList.contains("active") || mobileMenu.classList.contains("active")){
        desktopMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
    } else{
        desktopMenu.classList.add("active");
        mobileMenu.classList.add("active");
    }
}); 
