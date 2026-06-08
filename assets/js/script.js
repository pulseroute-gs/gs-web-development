//slideshow
const imagens = [
    "./assets/imgs/banner-desk-hero.png",
    "./assets/imgs/banner-hero-2.png",
    "./assets/imgs/banner-hero-3.png"
];

let indice = 0;

const slide = document.getElementById("hero-banner");

setInterval(() => {

    indice++;

    if(indice >= imagens.length) {
        indice = 0;
    }

    slide.src = imagens[indice];

}, 3000);

const newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    if (email.trim() === "") {
        alert("Por favor, digite um e-mail válido.");
        return;
    }
    alert("Obrigado por se inscrever na nossa newsletter!");
    newsletterForm.reset();
});