const menuLateral = document.querySelector('#menu-lateral');
const btnMenu = document.querySelector("#btn-menu");
const fechaMenu = document.querySelector("#fechar-menu");
const overlay = document.querySelector("#overlay");

btnMenu.addEventListener("click", abrirMenu);
fechaMenu.addEventListener("click", fecharMenu);
overlay.addEventListener("click", fecharMenu);

function abrirMenu() {
    menuLateral.classList.add('show');
    overlay.style.display = "flex";
    btnMenu.setAttribute('aria-expanded', 'true')
}

function fecharMenu() {
    menuLateral.classList.remove('show');
    overlay.style.display = "none";
    btnMenu.setAttribute('aria-expanded', 'false')
}

linksMenu.forEach(link => {
    link.addEventListener("click", fecharMenu);
});