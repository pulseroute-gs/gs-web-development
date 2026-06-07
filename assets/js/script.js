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