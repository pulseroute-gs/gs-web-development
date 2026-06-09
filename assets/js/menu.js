const menuLateral = document.querySelector('#menu-lateral');
const btnMenu = document.querySelector("#btn-menu");
const fechaMenu = document.querySelector("#fechar-menu");
const overlay = document.querySelector("#overlay");
const linksMenu = document.querySelectorAll("#menu-lateral a");

btnMenu.addEventListener("click", abrirMenu);
fechaMenu.addEventListener("click", fecharMenu);
overlay.addEventListener("click", fecharMenu);

function abrirMenu() {
    menuLateral.classList.add('show');
    overlay.style.display = "flex";
}

function fecharMenu() {
    menuLateral.classList.remove('show');
    overlay.style.display = "none";
}

linksMenu.forEach(link => {
    link.addEventListener("click", fecharMenu);
});